const cds = require("@sap/cds");
const { where } = require("@sap/cds/lib/ql/cds-ql");
const { response } = require("express");
const { Students } = cds.entities("approvalWorkflow.hrms")

const mysrvdemo = srv => {

    // srv.on("myfoobar", (req, res) => {
    //     return "Hello world" + " " + req.data.firstname + " " + req.data.lastname;
    // })

    srv.on("READ", "StudentSrv", (req, res) => {
        // console.log(req);
        // const { SELECT } = cds.ql;
        // const result = cds.run(SELECT.from(Students));
        const result = cds.run(req.query);
        // console.log(req.query);
        return result;
    })

    srv.on("CREATE", "UpdateStudent", async (req, res) => {
        let id = req.data.ID;
        let name = req.data.firstName;

        // transaction through handler created transaction object
        const txn = cds.transaction(req);
        const { UPDATE, SELECT } = cds.ql;

        const updatedRows = await txn.run(
                UPDATE(Students)
                .set({ firstName: name }).where({ ID: id }));
        if (updatedRows === 0) {
            req.error(500, "Error in updating record");
        }
        let result = await txn.run(
            SELECT.one.from(Students).where({ ID: id })
        );

        // Transaction through new transaction object 

        // let result = await cds.transaction(async txn => {
        //     const { UPDATE, SELECT } = cds.ql;
        //     const updatedRows = await txn.run(
        //         UPDATE(Students)
        //             .set({ firstName: name }).where({ ID: id }));
        //     if (updatedRows === 0) {
        //         req.error(500, "Error in updating record");
        //     }
        //     return txn.run(
        //         SELECT.one.from(Students).where({ ID: id })
        //     );
        // });

        // let result = await txn.run(
        //     UPDATE(Students)
        //         .set({firstName: name}).where({ ID: id }))
        //         .then((resolve) => {
        //             if (typeof resolve !== "undefined") {
        //                 return req.data;
        //             } else {
        //                 req.error(500, "Error in updating record");
        //             }
        //         }).catch((err) => {
        //             req.error("Something went wrong");
        //         });

        console.log(result);
        return result;
    })

    srv.on("CREATE", "CreateStudent", async (req, res) => {
        let student = req.data;
        // transaction through handler created transaction object
        const txn = cds.transaction(req);
        const { INSERT, SELECT } = cds.ql;
        const response = await txn.run(
                INSERT.into(Students)
                .entries(student)
            );
        if (response === 0) {
            req.error(500, "Error in updating record");
        }
        const createdStudent = await txn.run(
            SELECT.one.from(Students).where({email:student.email})
        )
        console.log(createdStudent);
        return { message: "Student inserted", createdStudent };
        // console.log(result);
        // return result;
    })

    srv.on("deleteStudent", async (req, res) => {
        let id = req.data.ID;
        // transaction through handler created transaction object
        const txn = cds.transaction(req);
        const { DELETE } = cds.ql;
        const deletedRows = await txn.run(
                DELETE.from(Students).where({ID:id})
            );
        if (response === 0) {
            req.error(500, "Error in deleting record");
        }
        return deletedRows > 0;
        // console.log(result);
        // return result;
    })


}

module.exports = mysrvdemo;
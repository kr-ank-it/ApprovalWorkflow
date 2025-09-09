const cds = require("@sap/cds");
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

        let {UPDATE} = cds.ql;

        let result = await UPDATE(Students)
        .set({
            firstName: name
        })
        .where(
            {
                ID:id
            }
        );
        console.log(result);
        return result;

    })
}

module.exports = mysrvdemo;
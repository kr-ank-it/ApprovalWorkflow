const cds = require("@sap/cds");
const { Students } = cds.entities("approvalWorkflow.hrms")

const mysrvdemo = srv => {

    srv.on("myfoobar", (req, res) => {
        return "Hello world" + " " + req.data.firstname + " " + req.data.lastname;
    })

    srv.on("READ", "StudentSrv", (req, res) => {
        // console.log(req);
        // const { SELECT } = cds.ql;
        // const result = cds.run(SELECT.from(Students));
        const result = cds.run(req.query);
        // console.log(req.query);
        return result;
    })
}

module.exports = mysrvdemo;
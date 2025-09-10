

const validations = srv => {
    
    srv.before("READ", "GetStudent", (req, res) => {
        console.log("validations successful");
        return req.error(500, "Pasting error");
        
    });
}

module.exports = validations;
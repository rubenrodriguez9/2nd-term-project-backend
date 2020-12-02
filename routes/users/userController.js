const bcrypt = require('bcryptjs')
const User = require("./User")

module.exports = {
    creatUser: async (req, res) => {

        try{
            let createdUser = {
                email: req.body.email,
                password: req.body.password
            }
        }
        catch(e){
            console.log(e);
        }

    }

}
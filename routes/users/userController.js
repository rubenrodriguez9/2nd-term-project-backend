const bcrypt = require('bcryptjs')
const User = require("./User")

module.exports = {
    createUser: async (req, res) => {

        try{
            let createdUser = {
                email: req.body.email,
                password: req.body.password
            }

            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash( createdUser.password, salt);

            createdUser.password = hashedPassword

            await createdUser.save()

            res.json({
                message: "User created"
            })
            
        }
        catch(e){
            res.status(500).json({
                message: 'Something went wrong'
            })
        }

    }

}
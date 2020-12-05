const bcrypt = require('bcryptjs')
const User = require("./User")
const jwt = require('jsonwebtoken')

module.exports = {
    createUser: async (req, res) => {

        try{
            let createdUser = new User({
                email: req.body.email,
                password: req.body.password
            })


            
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash( createdUser.password, salt);

            createdUser.password = hashedPassword
            
            await createdUser.save() 
         
                           
        }
        catch(e){

            if(e.code === 11000){
                res.status(409).json({
                    message: "Duplicate User"
                })
            }else

            res.status(500).json({
                message: 'Something went wrong'
            })
        }
    },

    signIn: async (req, res) => {

       try{

           
            let foundEmail = await User.findOne({
                email: req.body.email
            })

            if(!foundEmail){
                throw {message: 'User not found', status: 404}
            }
            

            let comparedPassword = await bcrypt.compare(req.body.password, foundEmail.password)
            if(!comparedPassword){
                throw {message: "Incorrect Password", status: 401}
            }               
            

            let token = jwt.sign({email: foundEmail.email, _id: foundEmail._id,  }, 'detroit30', {expiresIn: '10m'})
            
            res.json({jwtToken: token})
            

       }
       catch (e) {
           console.log(e);

           if(e.status === 404  ){
               res.status(404).json({
                   message: e.message

               })
           }else if (e.status === 401){
               res.status(401).json({
                   message: e.message

               })
                   
        }
       }
    }

}
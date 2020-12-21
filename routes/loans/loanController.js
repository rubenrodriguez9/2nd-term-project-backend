const { findById } = require("../users/User");
const Loans = require("./Loans")

module.exports = {
    createLoan: async (req, res) => {

        try{
            let createLoan = new Loans({
                    loan: req.body.debt,
                    name: req.body.name,
                    type: req.body.type,
                    user: req.body.user
            })

            await createLoan.save()
         
           
                           
        }
        catch(e){
            console.log(e);

            
    }
},
    getLoans: async (req, res) => {


        try{
        
            let foundLoans = await  Loans.find({ user: req.query.user } ) 
            

                
res.json(foundLoans)
          
            
         
           
                    
        }
        catch(e){
            console.log(e);

            
    }






    }
}


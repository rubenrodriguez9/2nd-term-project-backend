const mongoose = require('mongoose');


const loanSchema = new mongoose.Schema({

    loan:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        
    },
    type:{
        type: String,
        required: true
    },
   user:{
        type:String
    }

    


})

module.exports = mongoose.model('Loans', loanSchema)
const express = require('express');
const router = express.Router();
const {createLoan, getLoans } = require('./loanController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-loan', createLoan)

router.get("/get-loans", getLoans)



module.exports = router;

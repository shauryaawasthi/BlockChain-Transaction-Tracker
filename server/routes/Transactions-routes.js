const express = require("express");
const TransactionsGetController=require('../controller/Transactions-controller')

const TransactionsRouter = express.Router();

TransactionsRouter.get('/',TransactionsGetController);

module.exports=TransactionsRouter
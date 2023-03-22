const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const TransactionsSchema = new Schema({
  to:String,
  from:String,
  value:String,
  gasPrice:String,
  transactionHash:String,
  
  
});

const TransactionsModel = model('Transactions',TransactionsSchema);

module.exports = TransactionsModel;
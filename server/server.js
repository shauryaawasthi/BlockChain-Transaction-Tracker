require('dotenv').config()
const express= require('express');
const app=express();
const cors = require("cors");
const cron = require("node-cron");
const TransactionsRouter=require('./routes/Transactions-routes')
const TransChecker=require('./TransChecker') // function TransChecker imported from TransChecker.js
require('./config/db')// this is how Data basa i.e mongo is connected
app.use(cors());
app.use(express.json());

//user defined middlewear for Transactions Route
app.use('/transactions',TransactionsRouter);

// use to run the function TransChecker() after every 2 seconds
cron.schedule("*/2 * * * * *", async()=>{
    TransChecker();

}
);
 

app.listen(7000, () => console.log("app started at 7000..."));



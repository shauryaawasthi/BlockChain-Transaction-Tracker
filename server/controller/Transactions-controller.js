
const TransactionsGetController=async(req,res)=>{
    const transDoc= await Transactions.find();
    res.json(transDoc)
    // res.send("TC works")
}



module.exports=TransactionsGetController




const mongoose=require('mongoose');
const url=process.env.MONGOOSE_URL



// console.log(url)


// mongoose.connect(
//     "mongodb+srv://BlogPage:U2hGIoeyJaJGVUBd@cluster0.kudwox4.mongodb.net/?retryWrites=true&w=majority"
//   ).then(console.log('db connected')).catch((err)=>(console.log(err)))
mongoose.connect(url).then(console.log('db connected')).catch((err)=>(console.log(err)))

module.exports=mongoose;
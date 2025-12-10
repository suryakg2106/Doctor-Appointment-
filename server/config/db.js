const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected succesfully 💥")
    }
    catch(err){
        console.log(`DB not connected ${err} ❌`)
    }
}

module.exports=connectDB;
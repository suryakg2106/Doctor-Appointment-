const express=require('express');
const app=express();
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config();
const DBconnect=require('./config/db')
const authRouter=require('./routes/auth.routes')
const patientRouter=require('./routes/patient.routes')
app.use(cors());
app.use(express.json())
DBconnect()

app.use('/api',authRouter)
app.use('/api',patientRouter)

const PORT=5000;
app.listen(process.env.PORT || PORT,()=>{
    console.log(`server is Running on ${PORT} 🚀`);
})





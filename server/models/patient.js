const mongoose=require('mongoose')

const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        enum:['male','female','other']
    },
    age:{
        type:Number,
        required:true,
    },
    bloodGroup:{
        type:String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    },
    diseases:[String],
    description:[String]
},{timestamps:true})

module.exports=mongoose.model('patient',patientSchema)
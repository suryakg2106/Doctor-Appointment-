const patientSchema=require('../models/patient')

const patient=async(req,res)=>{
    const{name,phone,gender,age,bloodGroup,diseases,description}=req.body;
    try {
        const user= await patientSchema.create({name,phone,gender,age,bloodGroup,diseases,description})
        res.status(201).json({
            patient_id:user._id,
            name:user.name,
            phone:user.phone,
            age:user.age,
            bloodGroup:user.bloodGroup,
            diseases:user.diseases,
            description:user.description,
            message: `Hi ${user.name}, your details and problem have been received by Dr. [Doctor Name]. We will assign your appointment number very soon. ✅`
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
   
}


module.exports=patient;
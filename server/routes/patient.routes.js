const express=require('express')
const patient=require('../controllers/patient.controller')
const router=express.Router();
const protect = require('../middlewares/auth.middleware');

router.post('/patient',protect,patient);

module.exports=router;
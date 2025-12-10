const express=require('express')
const {registerUser,loginUser}=require('../controllers/auth.controller')
const {body}=require('express-validator')
const router=express.Router()

//Register Router
router.post('/register',[
    body('name').notEmpty().withMessage('Name Required'),
    body('email').isEmail().withMessage('Valid email Required'),
    body('password').isLength({min:6}).withMessage('Password min 6 char')
],registerUser)


//login Router
router.post('/login',loginUser)

module.exports = router;

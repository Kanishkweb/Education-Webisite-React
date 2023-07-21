// Importing the required models 
const express = require('express')
const User = require('../models/User')

//Npm Package express-validator
const { body, validationResult } = require("express-validator");

// Express Router
const router = express.Router();

// Npm Package Bcrypt js
const bcrypt = require("bcryptjs");

//Importing jsonwebtoken
const jwt = require('jsonwebtoken');

//Importing Custom Middleware
const fetchuser = require('../middleware/fetchuser');
//Secret Key JWT
const JWT_SECRET = "Kanishkisagood$oy";

// All Routes -------------------------------------------------------------------------------------------//


/*--------------------------Route-1---------------------------------------------------------------------*/

router.post("/createuser",[
    body("email").isEmail().withMessage("Invaild Email address"),
    body("password").isLength({min:6}).withMessage("Password must be 6 characters Long and must be oneSpecial character,numbers,alphabet"),
    body("name").notEmpty().withMessage("Name is required"),
],async(req,res) => {
    // If errros return bad request
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({Errors:errors.array()})
    }
    try {
        const {email,password,name} = req.body;
        let user = await User.findOne({email})

        // Securing password in salt + hash SecPassword
        const salt  = await bcrypt.genSalt(10);
        const SecPassword = await bcrypt.hash(req.body.password,salt)

        if(user){
            res.status(400).json({Error:"User Already Exist"})
        }

        user = new User({
            email,
            password:SecPassword,
            name,
        })

        await user.save()

        // Creating Token for User
        const data = {
            user:{
                id:user.id,
            },
        };
        const authToken = jwt.sign(data,JWT_SECRET);
        console.log(authToken)
        res.status(201).json({Message:"User created Successfully"});

    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Internal Server Error"})
    }
})
/*-----------------------------------Route-2----------------------------------------------------*/

router.post('/login',[
    body('email',"Enter a vaild Email").isEmail(),
    body('password',"Password connot be Blank").exists(),
],async(req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({Error:errors.array()});
    }

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email})
        if(!user){
            res.status(400).json({Error:"User not Exist with this Email"})
        }
        const passwordCompare = await bcrypt.compare(password,user.password)
        if(!passwordCompare){
            res.status(400).json({Error:"Entered password is wrong"})
        }
        const data = {
            user:{
                id:user.id,
            },
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        res.json({authToken})
    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Internal Server Error"})
    }
})

/*------------------------------ROUTE-3-----------------------------------------------*/

// Route - 3 : Get loggedin User Details using: POST "/api/auth/getuser". Login required


router.post("/getuser", fetchuser, async (req, res) => {
    try {
      const userId = req.user.id; // 64a914a8401ba63343b309fd
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

module.exports = router;

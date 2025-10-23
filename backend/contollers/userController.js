import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User does not exist"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Incorrect password"});
        }
        const token=createToken(user._id);
        res.status(200).json({success:true,message:"User logged in successfully",token});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Logging in user failed"}); 
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}
//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
     try {
        //checking is user already exists
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }
        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email format"});
        }

        if(password.length<6){
            return res.json({success:false,message:"Please enter 8 character strong password"});
        }

        //hashing password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        }); 

        const user= await newUser.save();
        const token=createToken(user._id);

        res.status(201).json({success:true,message:"User registered successfully",token});
     } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Registering user failed"});
     }
}

export { loginUser, registerUser };
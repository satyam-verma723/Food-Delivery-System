import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food item
const addFood = async(req,res)=>{
    if (!req.file) {
        return res.json({success:false,message:"No image uploaded"});
    }
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        imageUrl:image_filename
    });
    try{
        await food.save();
        res.status(201).json({success:true ,message:"Food item added successfully"});
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error in adding food item"});
    }
}

// all food list
const listfood=async(req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    } 
}

//remove food item
const removeFood=async(req,res)=>{
    try {
        const food= await foodModel.findById(req.body.id);
        if (!food) {
            return res.json({success:false,message:"Food not found"});
        }
        fs.unlink(`uploads/${food.imageUrl}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listfood,removeFood}

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hankargidb:WsBlBQI1OC2K67sl@cluster0.dr5jd0j.mongodb.net/food-del');
        console.log('MongoDB connected');
    }       
    catch (error) {
        console.log('MongoDB connection error:', error);
    }
};
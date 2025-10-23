import express from "express";
import { addFood, listfood, removeFood } from "../contollers/foodContoller.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

//routes
foodRouter.post('/add', upload.single("image"), addFood);

// Error handling middleware for multer
foodRouter.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        return res.status(400).json({ success: false, message: error.message });
    } else if (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
    next();
});

foodRouter.get("/list",listfood)
foodRouter.post("/remove",removeFood);



export default foodRouter;
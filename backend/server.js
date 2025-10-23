import express from 'express';
import cors from 'cors';
import path from 'path';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userrouter from './routes/userRoutes.js';
import 'dotenv/config.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

//db connection
connectDB();

//api endpoints
app.use('/api/food', foodRouter);
app.use("/images",express.static('uploads'))
app.use('/api/user', userrouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) =>{
    res.send('API Working!');
}); 

app.listen(port, () =>{
    console.log(`Listening on localhost:${port}`);
});

// Global error handler for body-parser JSON errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ success: false, message: 'Invalid JSON in request body' });
    }
    next();
});

//mongodb+srv://hankargidb:WsBlBQI1OC2K67sl@cluster0.dr5jd0j.mongodb.net/?
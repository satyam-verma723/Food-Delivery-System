import express from 'express';
import { addToCart, removeFromCart, getCart } from '../contollers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Route to add items to cart
router.post('/add', authMiddleware, addToCart);

// Route to remove items from cart
router.post('/remove', authMiddleware, removeFromCart);

// Route to get cart items
router.post('/get', authMiddleware, getCart);

export default router;

## Food Delivery App

A full-stack food delivery application built with Node.js, Express, MongoDB, and React. It includes a customer-facing frontend, an admin panel for managing the platform, and a robust backend API for handling orders, users, food items, and payments.

## Live Demo

- **Customer Frontend**: [https://food-del-frontend-kju3.onrender.com/](https://food-del-frontend-kju3.onrender.com/)
- **Admin Panel**: [https://food-del-admin-8gby.onrender.com/](https://food-del-admin-8gby.onrender.com/)
- **Backend API**: [https://food-del-backend-cdnh.onrender.com](https://food-del-backend-cdnh.onrender.com)

## Features

### Customer Frontend
- User authentication (login/signup)
- Browse food items by category
- Add items to cart
- Place orders with payment integration (Stripe)
- View order history
- Responsive design

### Admin Panel
- Add, edit, and remove food items
- Manage orders (view, update status)
- Upload food images
- Dashboard for order management

### Backend API
- RESTful API for food, users, cart, and orders
- JWT-based authentication
- Image upload handling
- Payment processing with Stripe
- MongoDB database integration

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Stripe** - Payment processing
- **Multer** - File uploads
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend (Customer)
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Vite** - Build tool

### Admin Panel
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Vite** - Build tool

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Stripe account for payments

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Start the server:
   ```bash
   npm run server
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Admin Panel Setup
1. Navigate to the `admin` directory:
   ```bash
   cd admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Ensure the backend server is running on port 4000.
2. Access the customer frontend at `http://localhost:5173` (default Vite port).
3. Access the admin panel at `http://localhost:5174` (default Vite port for admin).
4. Use the admin panel to add food items and manage orders.
5. Customers can browse, order, and track their orders via the frontend.

## API Endpoints

### Food
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add a new food item (admin)
- `POST /api/food/remove` - Remove a food item (admin)

### User
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `GET /api/cart/get` - Get user's cart

### Order
- `POST /api/order/place` - Place an order
- `GET /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (admin)
- `POST /api/order/status` - Update order status (admin)

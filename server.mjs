import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection string (replace <your_connection_string> with your own)
const mongoUri = process.env.MONGODB_URI; // or use your MongoDB Atlas URI

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


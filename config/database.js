import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/restaurant');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
}
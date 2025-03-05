import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import process from 'process';

import errorMiddleware from '../middlewares/errorMiddleware.js';

import contactRoutes from '../routes/contactRoutes.js';
import reservationRoutes from '../routes/reservationRoutes.js';

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use((err, req, res, next) => {
    console.error('Global Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && {
            stack: err.stack,
            message: err.message
        })
    });
});

app.use(errorMiddleware);

//Routes-Path
app.use('/api/contact', contactRoutes);
app.use('/api/reservations', reservationRoutes);

app.use((req, res) => {
	res.status(404).json({ message: "Endpoint not found" });
});


export default app; 
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] },
    people: { type: Number, required: true, min: [1, 'Number of people must be at least 1'] },
    specialRequest: { type: String, trim: true },
    dateTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'canceled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;

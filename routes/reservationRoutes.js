import express from 'express';
import { saveReservation } from '../controllers/reservationController.js';

const router = express.Router();

router.post('/', saveReservation);

export default router;

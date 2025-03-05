import express from 'express';
import { saveMessage, getMessages } from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getMessages);
router.post('/', saveMessage);

export default router;

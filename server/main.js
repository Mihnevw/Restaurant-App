//Стартира сървъра и първоначално свързва базата данни.
import 'dotenv/config';
import backend from './backend.js';
import { connectDB } from '../config/database.js';

const PORT = 5000;

connectDB();

backend.listen(PORT, () => {
    console.log(`Server started on port ${PORT}. You can make requests to http://localhost:${PORT}/`);
});

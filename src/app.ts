import express from 'express';
import { json } from 'body-parser';
import { setRoomRoutes } from './routes/roomRoutes';
import { setUserRoutes } from './routes/userRoutes';
import { setBookingRoutes } from './routes/bookingRoutes';
import { connectToDatabase } from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(express.static('public'));

// Database connection
connectToDatabase();

// Routes
setRoomRoutes(app);
setUserRoutes(app);
setBookingRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
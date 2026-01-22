import express from 'express';
import { json } from 'body-parser';
<<<<<<< HEAD
import { connectDB } from './config/database';
import roomRoutes from './routes/roomRoutes';
import userRoutes from './routes/userRoutes';
import bookingRoutes from './routes/bookingRoutes';
import path from 'path';
import cors from 'cors';
=======
import { setRoomRoutes } from './routes/roomRoutes';
import { setUserRoutes } from './routes/userRoutes';
import { setBookingRoutes } from './routes/bookingRoutes';
import { connectToDatabase } from './config/database';
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

const app = express();
const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
app.use(cors());
app.use(json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/rooms', roomRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server chạy tại http://localhost:${PORT}`);
    });
};

startServer();
=======
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
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

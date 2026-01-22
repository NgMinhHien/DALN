import express from 'express';
import { json } from 'body-parser';
import { connectDB } from './config/database';
import roomRoutes from './routes/roomRoutes';
import userRoutes from './routes/userRoutes';
import bookingRoutes from './routes/bookingRoutes';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

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
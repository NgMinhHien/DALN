import { Router } from 'express';
import BookingController from '../controllers/bookingController';

const router = Router();
const bookingController = new BookingController();

export function setBookingRoutes(app) {
    app.use('/api/bookings', router);
    router.post('/', bookingController.createBooking.bind(bookingController));
    router.get('/:id', bookingController.getBookingById.bind(bookingController));
    router.delete('/:id', bookingController.cancelBooking.bind(bookingController));
    router.get('/', bookingController.getAllBookings.bind(bookingController));
}
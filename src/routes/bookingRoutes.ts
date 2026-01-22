import { Router } from 'express';
<<<<<<< HEAD
import { createBooking, getAllBookings, getBookingById, cancelBooking } from '../controllers/bookingController';

const router = Router();

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.delete('/:id', cancelBooking);

export default router;
=======
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
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

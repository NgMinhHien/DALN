import { Router } from 'express';
import { createBooking, getAllBookings, getBookingById, cancelBooking } from '../controllers/bookingController';

const router = Router();

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.delete('/:id', cancelBooking);

export default router;
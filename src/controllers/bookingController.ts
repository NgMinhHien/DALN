<<<<<<< HEAD
import { Request, Response } from 'express';
import * as bookingService from '../services/bookingService';

export const createBooking = async (req: Request, res: Response) => {
    try {
        const booking = await bookingService.createBooking(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const getAllBookings = async (req: Request, res: Response) => {
    const bookings = await bookingService.getAllBookings();
    res.json(bookings);
};

export const getBookingById = async (req: Request, res: Response) => {
    const booking = await bookingService.getBookingById(req.params.id);
    booking ? res.json(booking) : res.status(404).json({ message: 'Không tìm thấy' });
};

export const cancelBooking = async (req: Request, res: Response) => {
    await bookingService.cancelBooking(req.params.id);
    res.status(204).send();
};
=======
export class BookingController {
    private bookings: Booking[] = [];

    createBooking(userId: string, roomId: string, startDate: Date, endDate: Date): Booking {
        const newBooking = new Booking(this.bookings.length + 1, userId, roomId, startDate, endDate);
        this.bookings.push(newBooking);
        return newBooking;
    }

    getBookingById(bookingId: number): Booking | undefined {
        return this.bookings.find(booking => booking.id === bookingId);
    }

    cancelBooking(bookingId: number): boolean {
        const index = this.bookings.findIndex(booking => booking.id === bookingId);
        if (index !== -1) {
            this.bookings.splice(index, 1);
            return true;
        }
        return false;
    }

    getAllBookings(): Booking[] {
        return this.bookings;
    }
}
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

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
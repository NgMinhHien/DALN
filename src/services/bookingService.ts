import Booking from '../models/Booking';
import Room from '../models/Room';

export const createBooking = async (data: { userId: string; roomId: string; startDate: Date; endDate: Date }) => {
    const room = await Room.findById(data.roomId);
    if (!room || !room.availability) throw new Error('Phòng không còn trống');

    const booking = new Booking(data);
    return await booking.save();
};

export const getAllBookings = async () => await Booking.find().populate('userId roomId');

export const getBookingById = async (id: string) => await Booking.findById(id).populate('userId roomId');

export const cancelBooking = async (id: string) => await Booking.findByIdAndDelete(id);
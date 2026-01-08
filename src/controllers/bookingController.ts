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
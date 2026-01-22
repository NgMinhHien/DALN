<<<<<<< HEAD
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
=======
export class Booking {
    id: number;
    userId: number;
    roomId: number;
    startDate: Date;
    endDate: Date;

    constructor(id: number, userId: number, roomId: number, startDate: Date, endDate: Date) {
        this.id = id;
        this.userId = userId;
        this.roomId = roomId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

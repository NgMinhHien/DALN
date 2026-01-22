<<<<<<< HEAD
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    area: { type: String },
    facilities: { type: String },
    image: { type: String },
    availability: { type: Boolean, default: true }
});

export default mongoose.model('Room', roomSchema);
=======
export class Room {
    id: number;
    name: string;
    location: string;
    price: number;
    availability: boolean;

    constructor(id: number, name: string, location: string, price: number, availability: boolean) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.price = price;
        this.availability = availability;
    }
}
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

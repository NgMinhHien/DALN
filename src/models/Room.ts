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
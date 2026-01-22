<<<<<<< HEAD
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

export default mongoose.model('User', userSchema);
=======
export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;

    constructor(id: number, username: string, password: string, email: string, role: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

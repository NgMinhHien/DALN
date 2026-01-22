<<<<<<< HEAD
import User from '../models/User';
import bcrypt from 'bcryptjs';

export const registerUser = async (data: { username: string; password: string; email: string }) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({ ...data, password: hashedPassword });
    return await user.save();
};

export const findUserByUsername = async (username: string) => await User.findOne({ username });

export const getUserById = async (id: string) => await User.findById(id);
=======
import { User } from '../models/User';

const users: User[] = [];

export const registerUser = (userData: User): User => {
    const newUser = { ...userData, id: users.length + 1 };
    users.push(newUser);
    return newUser;
};

export const loginUser = (username: string, password: string): User | null => {
    const user = users.find(user => user.username === username && user.password === password);
    return user || null;
};

export const getUserProfile = (userId: number): User | undefined => {
    return users.find(user => user.id === userId);
};

export const updateUser = (userId: number, updatedData: Partial<User>): User | undefined => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        return users[userIndex];
    }
    return undefined;
};
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

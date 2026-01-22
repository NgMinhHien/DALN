import User from '../models/User';
import bcrypt from 'bcryptjs';

export const registerUser = async (data: { username: string; password: string; email: string }) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({ ...data, password: hashedPassword });
    return await user.save();
};

export const findUserByUsername = async (username: string) => await User.findOne({ username });

export const getUserById = async (id: string) => await User.findById(id);
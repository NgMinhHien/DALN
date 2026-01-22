import { Request, Response } from 'express';
import * as userService from '../services/userService';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json({ message: 'Đăng ký thành công', userId: user._id });
    } catch (error) {
        res.status(400).json({ message: 'Username hoặc email đã tồn tại' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await userService.findUserByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        res.json({ token, userId: user._id });
    } else {
        res.status(401).json({ message: 'Sai username hoặc password' });
    }
};
import { Request, Response } from 'express';
import * as roomService from '../services/roomService';

export const getAllRooms = async (req: Request, res: Response) => {
    const rooms = await roomService.getAllRooms();
    res.json(rooms);
};

export const getRoomById = async (req: Request, res: Response) => {
    const room = await roomService.getRoomById(req.params.id);
    room ? res.json(room) : res.status(404).json({ message: 'Không tìm thấy phòng' });
};

export const createRoom = async (req: Request, res: Response) => {
    const room = await roomService.createRoom(req.body);
    res.status(201).json(room);
};

export const updateRoom = async (req: Request, res: Response) => {
    const room = await roomService.updateRoom(req.params.id, req.body);
    room ? res.json(room) : res.status(404).json({ message: 'Không tìm thấy' });
};

export const deleteRoom = async (req: Request, res: Response) => {
    await roomService.deleteRoom(req.params.id);
    res.status(204).send();
};
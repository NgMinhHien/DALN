<<<<<<< HEAD
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
=======
export class RoomController {
    private rooms: any[] = []; // This will hold the room data

    public getAllRooms(req: any, res: any) {
        res.json(this.rooms);
    }

    public getRoomById(req: any, res: any) {
        const roomId = req.params.id;
        const room = this.rooms.find(r => r.id === roomId);
        if (room) {
            res.json(room);
        } else {
            res.status(404).send('Room not found');
        }
    }

    public createRoom(req: any, res: any) {
        const newRoom = req.body;
        this.rooms.push(newRoom);
        res.status(201).json(newRoom);
    }

    public updateRoom(req: any, res: any) {
        const roomId = req.params.id;
        const roomIndex = this.rooms.findIndex(r => r.id === roomId);
        if (roomIndex !== -1) {
            this.rooms[roomIndex] = { ...this.rooms[roomIndex], ...req.body };
            res.json(this.rooms[roomIndex]);
        } else {
            res.status(404).send('Room not found');
        }
    }

    public deleteRoom(req: any, res: any) {
        const roomId = req.params.id;
        const roomIndex = this.rooms.findIndex(r => r.id === roomId);
        if (roomIndex !== -1) {
            this.rooms.splice(roomIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).send('Room not found');
        }
    }
}
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

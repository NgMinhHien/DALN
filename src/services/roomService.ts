<<<<<<< HEAD
import Room from '../models/Room';

export const getAllRooms = async () => await Room.find({});

export const getRoomById = async (id: string) => await Room.findById(id);

export const createRoom = async (data: any) => {
    const room = new Room(data);
    return await room.save();
};

export const updateRoom = async (id: string, data: any) => await Room.findByIdAndUpdate(id, data, { new: true });

export const deleteRoom = async (id: string) => await Room.findByIdAndDelete(id);

export const searchRooms = async (criteria: { location?: string; maxPrice?: number }) => {
    const query: any = {};
    if (criteria.location) query.location = { $regex: criteria.location, $options: 'i' };
    if (criteria.maxPrice) query.price = { $lte: criteria.maxPrice };
    return await Room.find(query);
=======
import { Room } from '../models/Room';

const rooms: Room[] = [];

export const getAllRooms = (): Room[] => {
    return rooms;
};

export const getRoomById = (id: number): Room | undefined => {
    return rooms.find(room => room.id === id);
};

export const createRoom = (room: Room): Room => {
    rooms.push(room);
    return room;
};

export const updateRoom = (id: number, updatedRoom: Partial<Room>): Room | undefined => {
    const roomIndex = rooms.findIndex(room => room.id === id);
    if (roomIndex === -1) return undefined;

    const room = rooms[roomIndex];
    const newRoom = { ...room, ...updatedRoom };
    rooms[roomIndex] = newRoom;
    return newRoom;
};

export const deleteRoom = (id: number): boolean => {
    const roomIndex = rooms.findIndex(room => room.id === id);
    if (roomIndex === -1) return false;

    rooms.splice(roomIndex, 1);
    return true;
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b
};
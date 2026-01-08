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
};
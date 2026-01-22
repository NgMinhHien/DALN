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
};
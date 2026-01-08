import { Room } from '../models/Room';

export const searchRooms = (rooms: Room[], criteria: { location?: string; maxPrice?: number; available?: boolean }) => {
    return rooms.filter(room => {
        const matchesLocation = criteria.location ? room.location.toLowerCase() === criteria.location.toLowerCase() : true;
        const matchesPrice = criteria.maxPrice ? room.price <= criteria.maxPrice : true;
        const matchesAvailability = criteria.available !== undefined ? room.availability === criteria.available : true;

        return matchesLocation && matchesPrice && matchesAvailability;
    });
};
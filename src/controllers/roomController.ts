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
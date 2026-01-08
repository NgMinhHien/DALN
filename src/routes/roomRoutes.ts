import { Router } from 'express';
import RoomController from '../controllers/roomController';

const router = Router();
const roomController = new RoomController();

export function setRoomRoutes(app) {
    app.use('/api/rooms', router);
    
    router.get('/', roomController.getAllRooms.bind(roomController));
    router.get('/:id', roomController.getRoomById.bind(roomController));
    router.post('/', roomController.createRoom.bind(roomController));
    router.put('/:id', roomController.updateRoom.bind(roomController));
    router.delete('/:id', roomController.deleteRoom.bind(roomController));
}
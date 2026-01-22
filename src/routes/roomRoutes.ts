import { Router } from 'express';
<<<<<<< HEAD
import { getAllRooms, getRoomById, createRoom, updateRoom, deleteRoom } from '../controllers/roomController';

const router = Router();

router.get('/', getAllRooms);
router.get('/:id', getRoomById);
router.post('/', createRoom);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);

export default router;
=======
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
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

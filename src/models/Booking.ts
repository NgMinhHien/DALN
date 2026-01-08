export class Booking {
    id: number;
    userId: number;
    roomId: number;
    startDate: Date;
    endDate: Date;

    constructor(id: number, userId: number, roomId: number, startDate: Date, endDate: Date) {
        this.id = id;
        this.userId = userId;
        this.roomId = roomId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
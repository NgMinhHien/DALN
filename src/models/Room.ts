export class Room {
    id: number;
    name: string;
    location: string;
    price: number;
    availability: boolean;

    constructor(id: number, name: string, location: string, price: number, availability: boolean) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.price = price;
        this.availability = availability;
    }
}
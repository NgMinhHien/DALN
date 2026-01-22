import { connectDB } from './config/database';
import Room from './models/Room';

const sampleRooms = [
    {
        name: 'Phòng Trọ Cao Cấp Quận 1',
        location: 'Quận 1, TP.HCM',
        price: 3500000,
        area: '25m²',
        facilities: 'Wifi, Điều hòa, Máy giặt',
        image: 'https://via.placeholder.com/300x200?text=Phong+1'
    },
];

async function seed() {
    await connectDB();
    await Room.deleteMany({});
    await Room.insertMany(sampleRooms);
    console.log('✅ Đã thêm data mẫu!');
    process.exit();
}

seed();
<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('🎉 Kết nối MongoDB Atlas thành công!');
    } catch (error) {
        console.error('Lỗi kết nối database:', error);
        process.exit(1);
    }
};
=======
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('rental_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql'
    logging: false, // Set to true to see SQL queries in the console
});

export default sequelize;
>>>>>>> 75587217831ccb93ec56abe4b25481f9a4506e1b

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
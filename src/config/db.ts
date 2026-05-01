import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Base de datos conectada 🚀');
  } catch (error) {
    console.error('Error conectando DB:', error);
  }
};
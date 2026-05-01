import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number
});

export const Producto = mongoose.model('Producto', productoSchema);
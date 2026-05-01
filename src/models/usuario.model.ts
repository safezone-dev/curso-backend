import mongoose, { Document } from 'mongoose';

export interface IUsuario extends Document {
  email: string;
  password: string;
  rol: string;
}

const usuarioSchema = new mongoose.Schema<IUsuario>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    default: 'USER'
  }
});

export const Usuario = mongoose.model<IUsuario>('Usuario', usuarioSchema);
import { Request, Response } from 'express';
import { Producto } from '../models/producto.model';

export const obtenerProducto = async (req: Request, res: Response) => {
  const productos = await Producto.find();
  res.json(productos);
};

export const crearProducto = async (req: Request, res: Response) => {
  const nuevoProducto = new Producto(req.body);
  await nuevoProducto.save();
  res.json(nuevoProducto);
};

export const actualizarProducto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(productoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar' });
  }
};

export const eliminarProducto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Producto.findByIdAndDelete(id);

    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar' });
  }
};
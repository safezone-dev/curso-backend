import { Request, Response } from 'express';

export const obtenerSaludo = (req: Request, res: Response) => {
  res.json({
    mensaje: 'Hola desde controlador',
    autor: 'Wil'
  });
};
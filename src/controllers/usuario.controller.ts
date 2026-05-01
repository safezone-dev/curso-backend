import { Request, Response } from 'express';

export const obtenerUsuario = (req: Request, res: Response) => {
  res.json({
    mensaje: ["juan", "ana", "pedro"]
  });
};
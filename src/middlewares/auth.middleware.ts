import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ error: 'No hay token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // opcional: guardar info del usuario
    (req as any).usuario = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
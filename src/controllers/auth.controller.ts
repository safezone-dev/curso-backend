import { Request, Response } from 'express';
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// REGISTRO
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 👇 VALIDAR SI YA EXISTE
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario) {
      return res.status(400).json({
        error: 'El usuario ya existe'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = new Usuario({
      email,
      password: hashedPassword
    });

    await usuario.save();

    res.json({ mensaje: 'Usuario creado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en registro' });
  }
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ error: 'Usuario no existe' });
    }

    const validPassword = await bcrypt.compare(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Password incorrecto' });
    }

    const token = jwt.sign(
      { id: usuario._id, rol: usuario.rol },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en login' });
  }
};
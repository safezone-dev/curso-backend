import { Router } from 'express';
import saludoRoutes from './saludo.routes';
import productoRoutes from './producto.routes';
import usuarioRoutes from './usuario.routes';
import authRoutes from './auth.routes';

const router = Router();

// Agrupar rutas
router.use('/saludo', saludoRoutes);
router.use('/producto', productoRoutes);
router.use('/usuario', usuarioRoutes);
router.use('/auth', authRoutes);

export default router;
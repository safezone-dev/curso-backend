import { Router } from 'express';
import {
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/producto.controller';

import { body } from 'express-validator';
import { validarCampos } from '../middlewares/validarCampos';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

// 🔍 GET productos (protegido)
router.get('/', validarJWT, obtenerProducto);

// ➕ POST crear producto (protegido + validación)
router.post(
  '/',
  [
    validarJWT,
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('precio').isNumeric().withMessage('El precio debe ser número'),
    validarCampos
  ],
  crearProducto
);

// ✏️ PUT actualizar producto
router.put('/:id', validarJWT, actualizarProducto);

// ❌ DELETE eliminar producto
router.delete('/:id', validarJWT, eliminarProducto);

export default router;
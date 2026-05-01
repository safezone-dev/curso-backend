import { Router } from 'express';
import { obtenerProducto, crearProducto, actualizarProducto, eliminarProducto  } from '../controllers/producto.controller';
import { body } from 'express-validator';
import { validarCampos } from '../middlewares/validarCampos';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

router.post(
    '/',
    [
      body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
      body('precio').isNumeric().withMessage('El precio debe ser número'),
      validarCampos
    ],
    crearProducto
  );

router.get('/', validarJWT, obtenerProducto);
router.post('/', validarJWT, crearProducto);
router.put('/:id', actualizarProducto);
router.delete('/:id', validarJWT, eliminarProducto);

export default router;
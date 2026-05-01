import { Router } from 'express';
import { obtenerUsuario } from '../controllers/usuario.controller';

const router = Router();

router.get('/', obtenerUsuario);

export default router;
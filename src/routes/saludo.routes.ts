import { Router } from 'express';
import { obtenerSaludo } from '../controllers/saludo.controller';

const router = Router();

router.get('/', obtenerSaludo);

export default router;
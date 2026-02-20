import { Router } from 'express';
import {
    crearPublicacion,
    listarPublicaciones,
    obtenerPublicacionPorId,
    editarPublicacion,
    eliminarPublicacion
} from './publication.controller.js';

const router = Router();

router.post('/', crearPublicacion);
router.get('/', listarPublicaciones);
router.get('/:id', obtenerPublicacionPorId);
router.put('/:id', editarPublicacion);
router.delete('/:id', eliminarPublicacion);

export default router;
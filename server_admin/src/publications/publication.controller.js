import Publicacion from './publication.model.js';

// Crear publicación
export const crearPublicacion = async (req, res, next) => {
    try {
        const publicacion = await Publicacion.create(req.body);
        res.status(201).json({
            success: true,
            data: publicacion
        });
    } catch (error) {
        next(error);
    }
};

// Listar publicaciones
export const listarPublicaciones = async (req, res, next) => {
    try {
        const publicaciones = await Publicacion.find();
        res.json({
            success: true,
            data: publicaciones
        });
    } catch (error) {
        next(error);
    }
};

// Obtener publicación por ID
export const obtenerPublicacionPorId = async (req, res, next) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);

        if (!publicacion) {
            return res.status(404).json({
                success: false,
                message: 'Publicación no encontrada'
            });
        }

        res.json({
            success: true,
            data: publicacion
        });
    } catch (error) {
        next(error);
    }
};

// Editar publicación (solo autor)
export const editarPublicacion = async (req, res, next) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);

        if (!publicacion) {
            return res.status(404).json({
                success: false,
                message: 'Publicación no encontrada'
            });
        }

        if (publicacion.autor !== req.body.autor) {
            return res.status(403).json({
                success: false,
                message: 'No autorizado para editar esta publicación'
            });
        }

        Object.assign(publicacion, req.body);
        await publicacion.save();

        res.json({
            success: true,
            data: publicacion
        });
    } catch (error) {
        next(error);
    }
};

// Eliminar publicación (solo autor)
export const eliminarPublicacion = async (req, res, next) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);

        if (!publicacion) {
            return res.status(404).json({
                success: false,
                message: 'Publicación no encontrada'
            });
        }

        if (publicacion.autor !== req.body.autor) {
            return res.status(403).json({
                success: false,
                message: 'No autorizado para eliminar esta publicación'
            });
        }

        await publicacion.deleteOne();

        res.json({
            success: true,
            message: 'Publicación eliminada correctamente'
        });
    } catch (error) {
        next(error);
    }
};
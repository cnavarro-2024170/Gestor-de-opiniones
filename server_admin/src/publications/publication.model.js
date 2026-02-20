import { Schema, model } from 'mongoose';

const PublicacionSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    texto: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

export default model('Publicacion', PublicacionSchema);
import mongoose from 'mongoose';

const Exercicio = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        linkVideo: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
export default new mongoose.model('Exercicio', Exercicio);

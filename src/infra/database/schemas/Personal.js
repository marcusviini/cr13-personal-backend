import mongoose from 'mongoose';

const Personal = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        cpf: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        tokenID: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
export default new mongoose.model('Personal', Personal);

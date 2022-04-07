import mongoose from 'mongoose';

const User = new mongoose.Schema(
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
        personal_id: {
            type: String,
            required: false,
        },
        treino_id: {
            type: String,
            required: false,
        },
        tokenID: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        password_reset_token: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export default new mongoose.model('User', User);

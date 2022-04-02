import * as Yup from 'yup';

export const CreateClienteValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            nome: Yup.string().required(),
            cpf: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(5),
        });

        await Schema.validate(req.body, { abortEarly: false });

        return next();
    } catch (e) {
        return res.status(400).json({
            error: 'Erro na validação',
            messages: e.errors,
        });
    }
};

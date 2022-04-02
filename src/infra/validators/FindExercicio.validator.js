import * as Yup from 'yup';

export const FindExercicioValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            nome: Yup.string().required(),
        });

        await Schema.validate(req.headers, { abortEarly: false });

        return next();
    } catch (e) {
        return res.status(400).json({
            error: 'Erro na validação',
            messages: e.errors,
        });
    }
};

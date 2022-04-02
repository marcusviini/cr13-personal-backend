import * as Yup from 'yup';

export const CreateExercicioValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            nome: Yup.string().required(),
            linkVideo: Yup.string().required(),
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

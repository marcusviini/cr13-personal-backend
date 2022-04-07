import * as Yup from 'yup';

export const createExercicioValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            nome: Yup.string().required(
                'Por favor informe o nome do exercício'
            ),
            linkVideo: Yup.string().required(
                'Por favor informe o link do exercício'
            ),
        });

        await Schema.validate(req.body, { abortEarly: false });

        return next();
    } catch (e) {
        return res.status(400).json({
            error: e.errors[0],
        });
    }
};

import * as Yup from 'yup';

export const findExercicioValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            nome: Yup.string().required(
                'Por favor informe o nome do exercício'
            ),
        });

        await Schema.validate(req.headers, { abortEarly: false });

        return next();
    } catch (e) {
        return res.status(400).json({
            error: e.errors[0],
        });
    }
};

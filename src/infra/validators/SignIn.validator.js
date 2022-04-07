import * as Yup from 'yup';

export const signInValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            email: Yup.string()
                .email('O email informado não é válido')
                .required('Por favor informe um email'),
            password: Yup.string().required('Por favor informe uma senha'),
        });

        await Schema.validate(req.body, { abortEarly: false });

        return next();
    } catch (e) {
        return res.status(400).json({
            error: e.errors[0],
        });
    }
};

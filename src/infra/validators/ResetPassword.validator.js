import * as Yup from 'yup';

export const resetPasswordValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            email: Yup.string()
                .email('O email informado não é válido')
                .required('Por favor informe um email'),
            token: Yup.string().required('Por favor informe um token'),
            password: Yup.string()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    'A senha deve conter no mínimo 8 caracteres, um maiúsculo, um minusculo, um numero e um carácter especial'
                )
                .required('Por favor informe uma senha')
                .min(8, 'A senha deve conter no mínimo 8 caracteres'),
        });

        await Schema.validate(req.body, { abortEarly: false });

        return next();
    } catch (e) {
        return res.status(400).json({
            error: e.errors[0],
        });
    }
};

export class DbSignIn {
    constructor({ userRepository, cryptoAdapter, cpfAdapter, jwtAdapter }) {
        this.userRepository = userRepository;
        this.cryptoAdapter = cryptoAdapter;
        this.cpfAdapter = cpfAdapter;
        this.jwtAdapter = jwtAdapter;
    }

    async execute(Data) {
        const { email, password } = Data;

        const findCliente = await this.userRepository.findUser({
            email: email.toLowerCase(),
        });

        if (!findCliente) {
            return {
                error: 'Cliente não encontrado, crie sua conta',
            };
        }

        const verifyPassword = await this.cryptoAdapter.compareHash(
            findCliente.password,
            password
        );

        if (!verifyPassword) {
            return {
                error: 'Senha incorreta',
            };
        }

        const token = await this.jwtAdapter.generate({
            user: findCliente,
        });

        const { nome, avatar } = findCliente;

        return {
            message: 'Login realizado com sucesso',
            token,
            nome,
            avatar,
        };
    }
}

export class DbSingUp {
    constructor({ userRepository, cryptoAdapter, cpfAdapter }) {
        this.userRepository = userRepository;
        this.cryptoAdapter = cryptoAdapter;
        this.cpfAdapter = cpfAdapter;
    }

    async execute(Data) {
        const { nome, email, cpf, password } = Data;

        const cpfIsValid = await this.cpfAdapter.cpfValidator(cpf);

        if (!cpfIsValid) {
            return {
                error: 'O CPF informado é inválido',
            };
        }

        const findUserByCpf = await this.userRepository.findUser({
            cpf,
        });

        if (findUserByCpf) {
            return {
                error: 'Já possui um cadastro com este cpf',
            };
        }

        const findUserByEmail = await this.userRepository.findUser({
            email: email.toLowerCase(),
        });

        if (findUserByEmail) {
            return {
                error: 'Já possui um cadastro com este email',
            };
        }

        const [, newCpf] = cpf.split('-');

        const tokenID = await this.cryptoAdapter.createHash(newCpf);

        await this.userRepository.create({
            nome: nome.charAt(0).toUpperCase() + nome.slice(1),
            email: email.toLowerCase(),
            cpf,
            password,
            tokenID,
        });

        return {
            message: 'Usuário cadastrado com sucesso',
        };
    }
}

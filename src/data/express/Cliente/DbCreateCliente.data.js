export class DbCreateCliente {
    constructor({ clienteRepository, cryptoAdapter, cpfAdapter }) {
        this.clienteRepository = clienteRepository;
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

        const findClienteByCpf = await this.clienteRepository.findClienteByCpf({
            cpf,
        });

        if (findClienteByCpf[0]) {
            return {
                error: 'Cliente ja possui cadastro',
            };
        }

        const tokenID = await this.cryptoAdapter.createHash(cpf);

        await this.clienteRepository.create({
            nome,
            email,
            cpf,
            password,
            tokenID,
        });

        return {
            message: 'Cliente cadastrado com sucesso',
        };
    }
}

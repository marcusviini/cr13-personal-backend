export class DbCreatePersonal {
    constructor({ personalRepository, cryptoAdapter, cpfAdapter }) {
        this.personalRepository = personalRepository;
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

        const findPersonalByCpf = await this.personalRepository.findPersonalByCpf(
            { cpf }
        );

        if (findPersonalByCpf[0]) {
            return {
                error: 'Personal ja possui cadastro',
            };
        }

        const tokenID = await this.cryptoAdapter.createHash(cpf);

        await this.personalRepository.create({
            nome,
            email,
            cpf,
            password,
            tokenID,
        });

        return {
            message: 'Personal cadastrado com sucesso',
        };
    }
}

import { cpf } from 'cpf-cnpj-validator';

export class CpfAdapter {
    async cpfValidator(cpfUser) {
        return cpf.isValid(cpfUser);
    }
}

import crypto from 'crypto';
import 'dotenv/config';

export class CryptoAdapter {
    async createHash(cpf) {
        const [, newCpf] = cpf.split('-');

        const hash =
            crypto.randomBytes(16).toString('hex').slice(30) +
            new Date().getTime().toString(36).slice(6) +
            newCpf;

        return hash;
    }
}

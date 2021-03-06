import User from '../schemas/User';
import { CryptoAdapter } from '../../adapters/cripto.adapter';

const cryptoAdapter = new CryptoAdapter();

export class UserRepository {
    async create(data) {
        data.password = await cryptoAdapter.createHashPassword(data.password);
        data.cpf = await cryptoAdapter.createHashPassword(data.cpf);
        return await User.create(data);
    }

    async update(_id, data) {
        if (data.password) {
            data.password = await cryptoAdapter.createHashPassword(
                data.password
            );
        }
        if (data.cpf) {
            data.cpf = await cryptoAdapter.createHashPassword(data.cpf);
        }
        return await User.findByIdAndUpdate({ _id }, data);
    }

    async findUser(data) {
        return await User.findOne(data);
    }

    async findUserByCpf(data) {
        return await User.findOne(data);
    }

    async findAll() {
        return await User.find();
    }
}

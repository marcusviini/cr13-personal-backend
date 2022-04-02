import Cliente from '../schemas/Cliente';

export class ClienteRepository {
    async create(data) {
        return await Cliente.create(data);
    }

    async update(data) {
        return await Cliente.findByIdAndUpdate({ _id: data.id }, data);
    }

    async findCliente(data) {
        return await Cliente.find(data);
    }

    async findClienteByCpf(data) {
        return await Cliente.find(data);
    }

    async findAll() {
        return await Cliente.find();
    }
}

import Personal from '../schemas/Personal';

export class PersonalRepository {
    async create(data) {
        return await Personal.create(data);
    }

    async update(data) {
        return await Personal.findByIdAndUpdate({ _id: data.id }, data);
    }

    async findPersonal(data) {
        return await Personal.find(data);
    }

    async findPersonalByCpf(data) {
        return await Personal.find(data);
    }

    async findAll() {
        return await Personal.find();
    }
}

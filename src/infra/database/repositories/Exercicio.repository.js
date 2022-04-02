import Exercicio from '../schemas/Exercicio';

export class ExercicioRepository {
    async create(data) {
        return await Exercicio.create(data);
    }

    async update(data) {
        return await Exercicio.findByIdAndUpdate({ _id: data.id }, data);
    }

    async findExercicio(data) {
        const { nome } = data;
        return await Exercicio.find({ nome: { $regex: nome, $options: 'i' } });
    }

    async findAll() {
        return await Exercicio.find();
    }
}

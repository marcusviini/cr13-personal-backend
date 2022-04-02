export class DbCreateExercicio {
    constructor({ exercicioRepository }) {
        this.exercicioRepository = exercicioRepository;
    }

    async execute(Data) {
        const { nome, linkVideo } = Data;

        const findExercicio = await this.exercicioRepository.findExercicio({
            nome,
        });

        if (findExercicio[0]) {
            return {
                error: 'Exercicio ja existe',
            };
        }

        await this.exercicioRepository.create({
            nome,
            linkVideo,
        });

        return {
            message: 'Exercicio cadastrado com sucesso',
        };
    }
}

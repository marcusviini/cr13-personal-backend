export class DbFindExercicio {
    constructor({ exercicioRepository }) {
        this.exercicioRepository = exercicioRepository;
    }

    async execute(Data) {
        const { nome } = Data;

        let exercicios = await this.exercicioRepository.findExercicio({
            nome,
        });

        if (!exercicios[0]) {
            return {
                error: 'Exercicio não existe',
            };
        }

        exercicios = exercicios.map((exercicio) => {
            return {
                nome: exercicio.nome,
                linkVideo: exercicio.linkVideo,
            };
        });

        return { exercicios };
    }
}

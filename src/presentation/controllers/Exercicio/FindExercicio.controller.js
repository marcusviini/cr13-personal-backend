export class FindExercicioController {
    constructor({ dbFindExercicio }) {
        this.dbFindExercicio = dbFindExercicio;
    }

    async handle(httpRequest) {
        try {
            const response = await this.dbFindExercicio.execute(
                httpRequest.headers
            );

            if (response.error) {
                return {
                    status: 400,
                    data: { error: response.error },
                };
            }

            return {
                status: 200,
                data: {
                    exercicios: response.exercicios,
                },
            };
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                data:
                    'Ocorreu um problema interno, tente novamente ou fale com o suporte',
            };
        }
    }
}

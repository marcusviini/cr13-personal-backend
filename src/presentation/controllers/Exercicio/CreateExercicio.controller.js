export class CreateExercicioController {
    constructor({ dbCreateExercicio }) {
        this.dbCreateExercicio = dbCreateExercicio;
    }

    async handle(httpRequest) {
        try {
            const response = await this.dbCreateExercicio.execute(
                httpRequest.body
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
                    message: response.message,
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

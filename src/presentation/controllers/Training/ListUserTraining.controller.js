export class ListUserTrainingController {
    constructor({ dbListUserTraining }) {
        this.dbListUserTraining = dbListUserTraining;
    }

    async handle(httpRequest) {
        try {
            const response = await this.dbListUserTraining.execute(
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
                    treinos: response.treinos,
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

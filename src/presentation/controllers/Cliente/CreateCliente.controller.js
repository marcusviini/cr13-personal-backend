export class CreateClienteController {
    constructor({ dbCreateCliente }) {
        this.dbCreateCliente = dbCreateCliente;
    }

    async handle(httpRequest) {
        try {
            const response = await this.dbCreateCliente.execute(
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
            return {
                status: 500,
                data:
                    'Ocorreu um problema interno, tente novamente ou fale com o suporte',
            };
        }
    }
}

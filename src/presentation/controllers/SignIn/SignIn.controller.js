export class SignInController {
    constructor({ dbSignIn }) {
        this.dbSignIn = dbSignIn;
    }

    async handle(httpRequest) {
        try {
            const response = await this.dbSignIn.execute(httpRequest.body);

            if (response.error) {
                return {
                    status: 400,
                    data: { error: response.error },
                };
            }

            return {
                status: 200,
                data: response,
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

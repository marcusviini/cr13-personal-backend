import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { DbSendToken } from '../../../data';
import { SendTokenController } from '../../../presentation/controllers';
import { UserRepository } from '../../../infra/database/repositories';
import { sendTokenValidator } from '../../../infra/validators';

import { MailAdapter } from '../../../infra/adapters/mail.adapter';

const routes = Router();

const sendTokenController = () => {
    const dbSendToken = new DbSendToken({
        userRepository: new UserRepository(),
        mailAdapter: new MailAdapter(),
    });
    return new SendTokenController({ dbSendToken });
};

routes.post('/sendToken', sendTokenValidator, adapRoute(sendTokenController()));

export default routes;

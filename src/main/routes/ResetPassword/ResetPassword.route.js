import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { DbResetPassword } from '../../../data';
import { CryptoAdapter } from '../../../infra/adapters/cripto.adapter';
import { ResetPasswordController } from '../../../presentation/controllers';
import { UserRepository } from '../../../infra/database/repositories';
import { resetPasswordValidator } from '../../../infra/validators';

const routes = Router();

const resetPasswordController = () => {
    const dbResetPassword = new DbResetPassword({
        userRepository: new UserRepository(),
        cryptoAdapter: new CryptoAdapter(),
    });
    return new ResetPasswordController({ dbResetPassword });
};

routes.put(
    '/resetPassword',
    resetPasswordValidator,
    adapRoute(resetPasswordController())
);

export default routes;

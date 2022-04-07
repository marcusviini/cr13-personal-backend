import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { CryptoAdapter } from '../../../infra/adapters/cripto.adapter';
import { DbSingUp } from '../../../data';
import { SingUpController } from '../../../presentation/controllers';
import { UserRepository } from '../../../infra/database/repositories';
import { singUpValidator } from '../../../infra/validators';
import { CpfAdapter } from '../../../infra/adapters/cpf.adapter';

const routes = Router();

const singUpController = () => {
    const dbSingUp = new DbSingUp({
        userRepository: new UserRepository(),
        cryptoAdapter: new CryptoAdapter(),
        cpfAdapter: new CpfAdapter(),
    });
    return new SingUpController({ dbSingUp });
};

routes.post('/singUp', singUpValidator, adapRoute(singUpController()));

export default routes;

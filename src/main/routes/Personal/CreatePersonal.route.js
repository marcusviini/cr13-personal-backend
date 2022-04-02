import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { CryptoAdapter } from '../../../infra/adapters/cripto.adapter';
import { DbCreatePersonal } from '../../../data';
import { CreatePersonalController } from '../../../presentation/controllers';
import { PersonalRepository } from '../../../infra/database/repositories';
import { CreatePersonalValidator } from '../../../infra/validators';
import { CpfAdapter } from '../../../infra/adapters/cpf.adapter';

const routes = Router();

const createPersonalController = () => {
    const dbCreatePersonal = new DbCreatePersonal({
        personalRepository: new PersonalRepository(),
        cryptoAdapter: new CryptoAdapter(),
        cpfAdapter: new CpfAdapter(),
    });
    return new CreatePersonalController({ dbCreatePersonal });
};

routes.post(
    '/personal/singUp',
    CreatePersonalValidator,
    adapRoute(createPersonalController())
);

export default routes;

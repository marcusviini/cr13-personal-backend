import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { CryptoAdapter } from '../../../infra/adapters/cripto.adapter';
import { DbCreateCliente } from '../../../data';
import { CreateClienteController } from '../../../presentation/controllers';
import { ClienteRepository } from '../../../infra/database/repositories';
import { CreateClienteValidator } from '../../../infra/validators';
import { CpfAdapter } from '../../../infra/adapters/cpf.adapter';

const routes = Router();

const createClienteController = () => {
    const dbCreateCliente = new DbCreateCliente({
        clienteRepository: new ClienteRepository(),
        cryptoAdapter: new CryptoAdapter(),
        cpfAdapter: new CpfAdapter(),
    });
    return new CreateClienteController({ dbCreateCliente });
};

routes.post(
    '/cliente/singUp',
    CreateClienteValidator,
    adapRoute(createClienteController())
);

export default routes;

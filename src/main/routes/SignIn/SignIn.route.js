import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { CryptoAdapter } from '../../../infra/adapters/cripto.adapter';
import { JwtAdapter } from '../../../infra/adapters/jwt.adapter';
import { DbSignIn } from '../../../data';
import { SignInController } from '../../../presentation/controllers';
import { UserRepository } from '../../../infra/database/repositories';
import { signInValidator } from '../../../infra/validators';
import { CpfAdapter } from '../../../infra/adapters/cpf.adapter';

const routes = Router();

const signInController = () => {
    const dbSignIn = new DbSignIn({
        userRepository: new UserRepository(),
        cryptoAdapter: new CryptoAdapter(),
        cpfAdapter: new CpfAdapter(),
        jwtAdapter: new JwtAdapter(),
    });
    return new SignInController({ dbSignIn });
};

routes.post('/SignIn', signInValidator, adapRoute(signInController()));

export default routes;

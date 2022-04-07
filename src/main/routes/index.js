import { Router } from 'express';

import SingUp from './SingUp/SingUp.route';
import SignIn from './SignIn/SignIn.route';
import SendToken from './ResetPassword/SendToken.route';
import ResetPassword from './ResetPassword/ResetPassword.route';

import CreateExercicio from './Exercicio/CreateExercicio.route';
import FindExercicio from './Exercicio/FindExercicio.route';

import ListUserTraining from './Training/ListUserTraining.route';

import { authMidlleware } from '../../infra/middlewares/auth';

const routes = [
    SingUp,
    SignIn,
    SendToken,
    ResetPassword,
    CreateExercicio,
    FindExercicio,
    ListUserTraining,
];

const router = Router();

//router.use(authMidlleware);

export const exposeRoutes = routes.map((routerMap) =>
    router.use('/', routerMap)
);

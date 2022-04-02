import { Router } from 'express';

import CreatePersonal from './Personal/CreatePersonal.route';

import CreateCliente from './Cliente/CreateCliente.route';

import CreateExercicio from './Exercicio/CreateExercicio.route';
import FindExercicio from './Exercicio/FindExercicio.route';

import { authMidlleware } from '../../infra/middlewares/auth';

const routes = [CreatePersonal, CreateCliente, CreateExercicio, FindExercicio];

const router = Router();

//router.use(authMidlleware);

export const exposeRoutes = routes.map((routerMap) =>
    router.use('/', routerMap)
);

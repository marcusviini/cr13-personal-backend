import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { DbFindExercicio } from '../../../data';
import { FindExercicioController } from '../../../presentation/controllers';
import { ExercicioRepository } from '../../../infra/database/repositories';
import { findExercicioValidator } from '../../../infra/validators';

const routes = Router();

const findExercicioController = () => {
    const dbFindExercicio = new DbFindExercicio({
        exercicioRepository: new ExercicioRepository(),
    });
    return new FindExercicioController({ dbFindExercicio });
};

routes.get(
    '/exercicio',
    findExercicioValidator,
    adapRoute(findExercicioController())
);

export default routes;

import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { DbCreateExercicio } from '../../../data';
import { CreateExercicioController } from '../../../presentation/controllers';
import { ExercicioRepository } from '../../../infra/database/repositories';
import { CreateExercicioValidator } from '../../../infra/validators';

const routes = Router();

const createExercicioController = () => {
    const dbCreateExercicio = new DbCreateExercicio({
        exercicioRepository: new ExercicioRepository(),
    });
    return new CreateExercicioController({ dbCreateExercicio });
};

routes.post(
    '/exercicio',
    CreateExercicioValidator,
    adapRoute(createExercicioController())
);

export default routes;

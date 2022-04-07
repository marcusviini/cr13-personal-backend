import { Router } from 'express';
import { adapRoute } from '../../adapter/express.adapter';
import { DbListUserTraining } from '../../../data';
import { ListUserTrainingController } from '../../../presentation/controllers';

const routes = Router();

const listUserTrainingController = () => {
    const dbListUserTraining = new DbListUserTraining({});
    return new ListUserTrainingController({ dbListUserTraining });
};

routes.get('/training', adapRoute(listUserTrainingController()));

export default routes;

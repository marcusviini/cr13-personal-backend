import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import '../infra/database';
import io from '@pm2/io';
import { exposeRoutes } from './routes';
import 'dotenv/config';

const app = express();
app.use(json());
app.use(cors());
app.use(helmet());

io.init({
    transactions: true,
    http: true,
});

app.use(exposeRoutes);

export default app;

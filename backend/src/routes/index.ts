import { Router } from 'express';

import usersRouter from './users.routes';
import leadsRouter from './leads.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/leads', leadsRouter);

export default routes;

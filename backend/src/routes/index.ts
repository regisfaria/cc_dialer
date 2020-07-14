import { Router } from 'express';

import usersRouter from './users.routes';
import leadRouter from './lead.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/leads', leadRouter);

export default routes;

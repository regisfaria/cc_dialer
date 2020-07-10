import { Router } from 'express';

import registerRouter from './register.routes';
import userRouter from './user.routes';
import leadRouter from './lead.routes';

const routes = Router();

routes.use('/register', registerRouter);
routes.use('/users', userRouter);
routes.use('/leads', leadRouter);

export default routes;

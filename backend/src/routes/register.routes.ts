import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import CreateProfileService from '../services/CreateProfileService';

const registerRouter = Router();

registerRouter.post('/', async (request, response) => {
  try {
    const { name, login, password, privileges } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      login,
      password,
      privileges,
    });

    const createProfile = new CreateProfileService();

    const profile = await createProfile.execute(user.id);

    return response.json({ user, profile });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default registerRouter;

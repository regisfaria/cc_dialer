import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';

import CreateUserService from '../services/CreateUserService';
import CreateProfileService from '../services/CreateProfileService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const userRepository = getCustomRepository(UserRepository);

  const users = await userRepository.find();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
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

export default usersRouter;

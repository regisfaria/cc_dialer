import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
  const userRepository = getCustomRepository(UserRepository);

  const users = await userRepository.find();

  return response.json(users);
});

export default userRouter;

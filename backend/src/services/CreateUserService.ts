import { getCustomRepository } from 'typeorm';

import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface Request {
  name: string;
  login: string;
  password: string;
  privileges: string;
}

export default class CreateUserService {
  public async execute({
    name,
    login,
    password,
    privileges,
  }: Request): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const loginAvailability = await userRepository.isValidLogin(login);

    if (!loginAvailability) {
      throw Error('Login already in use');
    }

    const user = userRepository.create({
      name,
      login,
      password,
      privileges,
    });

    await userRepository.save(user);

    return user;
  }
}

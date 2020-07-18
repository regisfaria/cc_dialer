import { getRepository } from 'typeorm';

import User from '../models/User';

import AppError from '../errors/AppError';

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
    const usersRepository = getRepository(User);

    const loginExists = await usersRepository.findOne(login);

    if (loginExists) {
      throw new AppError('Login already in use');
    }

    const user = usersRepository.create({
      name,
      login,
      password,
      privileges,
    });

    await usersRepository.save(user);

    return user;
  }
}

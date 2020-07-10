import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async isValidLogin(login: string): Promise<true | false> {
    const findLogin = await this.findOne({
      where: { login },
    });

    return findLogin === undefined;
  }
}

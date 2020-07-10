import { EntityRepository, Repository } from 'typeorm';

import Profile from '../models/Profile';

@EntityRepository(Profile)
export default class ProfileRepository extends Repository<Profile> {}

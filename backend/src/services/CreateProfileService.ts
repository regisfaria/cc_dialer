import { getCustomRepository } from 'typeorm';

import Profile from '../models/Profile';
import ProfileRepository from '../repositories/ProfileRepository';

export default class CreateProfileService {
  public async execute(userId: string): Promise<Profile> {
    const profileRepository = getCustomRepository(ProfileRepository);

    const profile = profileRepository.create({
      userId,
    });

    await profileRepository.save(profile);

    return profile;
  }
}

import { EntityRepository, Repository } from 'typeorm';

import Lead from '../models/Lead';

@EntityRepository(Lead)
export default class LeadRepository extends Repository<Lead> {}

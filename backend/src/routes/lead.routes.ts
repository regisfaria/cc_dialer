import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import LeadRepository from '../repositories/LeadRepository';
import CreateLeadService from '../services/CreateLeadService';

const leadRouter = Router();

leadRouter.get('/', async (request, response) => {
  const leadRepository = getCustomRepository(LeadRepository);

  const leads = await leadRepository.find();

  return response.json(leads);
});

leadRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      dot,
      phoneNumber,
      companyName,
      primaryAddress,
      otherAddress,
      entityType,
      operatingStatus,
      mcs150FormDate,
      carrierOperation,
      cargoCarried,
      powerUnits,
      operationClassification,
    } = request.body;

    const createLead = new CreateLeadService();

    const lead = await createLead.execute({
      name,
      email,
      dot,
      phoneNumber,
      companyName,
      primaryAddress,
      otherAddress,
      entityType,
      operatingStatus,
      mcs150FormDate,
      carrierOperation,
      cargoCarried,
      powerUnits,
      operationClassification,
    });

    return response.json(lead);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default leadRouter;

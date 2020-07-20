import { Router } from 'express';
import { getRepository } from 'typeorm';

import Lead from '../models/Lead';
import CreateLeadService from '../services/CreateLeadService';

const leadsRouter = Router();

leadsRouter.get('/', async (request, response) => {
  const leadRepository = getRepository(Lead);

  const leads = await leadRepository.find();

  return response.json(leads);
});

leadsRouter.post('/', async (request, response) => {
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

export default leadsRouter;

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('leads')
export default class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dot: string;

  @Column()
  phoneNumber: string;

  @Column()
  companyName: string;

  @Column()
  primaryAddress: string;

  @Column()
  otherAddress: string;

  @Column()
  entityType: string;

  @Column()
  operatingStatus: string;

  @Column()
  mcs150FormDate: string;

  @Column()
  carrierOperation: string;

  @Column()
  cargoCarried: string;

  @Column()
  powerUnits: string;

  @Column()
  operationClassification: string;
}

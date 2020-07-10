import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profiles')
export default class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;
}
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Restaurant } from '../../restaurants/entities/restaurant.entity';
import { Role } from '../../roles/entities/role.entity';

@Entity('users')
export class User {
  // Define your user entity properties here

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Restaurant)
  restaurant: Restaurant;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column({ default: true })
  isActive: boolean;
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Restaurant } from '../../restaurants/entities/restaurant.entity';

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

  @Column()
  role: string;

  @Column({ default: true })
  isActive: boolean;
}

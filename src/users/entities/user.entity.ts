import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Restaurant } from '../../restaurants/entities/restaurant.entity';
import { Role } from '../../roles/entities/role.entity';

// @Entity('users')
// export class User {
//   // Define your user entity properties here

//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   email: string;

//   @Column()
//   password: string;

//   @ManyToOne(() => Restaurant)
//   restaurant: Restaurant;

//   @ManyToOne(() => Role, (role) => role.users)
//   role: Role;

//   @Column({ default: true })
//   isActive: boolean;
// }

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.users, {
    onDelete: 'CASCADE',
  })
  restaurant: Restaurant;

  @ManyToOne(() => Role, (role) => role.users, {
    eager: true,
  })
  role: Role;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Restaurant } from '../../restaurants/entities/restaurant.entity';
import { User } from '../../users/entities/user.entity';

// @Entity()
// export class Role {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column({ default: true })
//   isActive: boolean;

//   @ManyToOne(() => Restaurant, (restaurant) => restaurant.role, {
//     onDelete: 'CASCADE',
//   })
//   restaurant: Restaurant;

//   @OneToMany(() => User, (user) => user.role)
//   users: User;

//   @CreateDateColumn()
//   createdAt: Date;
// }
@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.roles, {
    onDelete: 'CASCADE',
  })
  restaurant: Restaurant;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}

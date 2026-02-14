import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Role } from '../../roles/entities/role.entity';
import { User } from '../../users/entities/user.entity';

// @Entity('restaurants')
// export class Restaurant {
//   // Define your restaurant entity properties here
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column()
//   address: string;

//   @Column()
//   phone: string;

//   @Column()
//   email: string;

//   @ManyToOne(() => Role, (role) => role.restaurant)
//   role: Role;

//   @Column()
//   cuisine: string;

//   @Column({ default: true })
//   isActive: boolean;

//   @CreateDateColumn()
//   createdAt: Date;
// }

@Entity('restaurants')
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => Role, (role) => role.restaurant)
  roles: Role[];

  @OneToMany(() => User, (user) => user.restaurant)
  users: User[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}

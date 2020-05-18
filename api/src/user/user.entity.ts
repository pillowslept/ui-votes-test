import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 80 })
  email: string;

  @Column()
  age: number;

  @Column({ length: 20 })
  marriageStatus: string;

  @CreateDateColumn()
  createdAt: Date;

}

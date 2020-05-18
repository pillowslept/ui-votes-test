import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Entity('vote')
export class VoteEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  personId: number;

  @ManyToOne(() => UserEntity)
  @JoinTable()
  user: UserEntity;

  @Column({ length: 10 })
  voteType: string;

  @CreateDateColumn()
  createdAt: Date;

}

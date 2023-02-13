import { isNotEmpty, IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Ad } from "@/interfaces/Ad";
import { UserEntity } from './users.entity';

@Entity()
export class AdEntity extends BaseEntity implements Ad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  description: string;

  @Column()
  price: number;

  @Column()
  is_negotiable: boolean;

  @ManyToOne(()=>UserEntity, (user) => user.ads)
  adman: UserEntity


  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}

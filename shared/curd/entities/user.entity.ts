import {Entity, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';
import {UserEntityInterface} from "./user-entity.interface";

@Entity()
export class UserEntity implements UserEntityInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;
}
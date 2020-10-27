import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { Int, Field, ObjectType } from 'type-graphql';
import { Length } from 'class-validator';

@ObjectType()
@Entity()
export class Url extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    @Length(7, 14)
    shortId: string;

    @Field()
    @Column()
    redirect: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}

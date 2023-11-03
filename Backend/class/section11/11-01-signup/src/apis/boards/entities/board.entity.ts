import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { ObjectType, Int, Field } from '@nestjs/graphql';

@Entity() // mysql을 위한 데코레이터
@ObjectType() // graphQL을 위한 데코레이터
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;
}

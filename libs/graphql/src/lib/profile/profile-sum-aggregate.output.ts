import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileSumAggregate {

    @Field(() => String, {nullable:true})
    phone?: bigint | number;

    @Field(() => Int, {nullable:true})
    point?: number;

    @Field(() => Int, {nullable:true})
    level?: number;
}

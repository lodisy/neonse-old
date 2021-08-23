import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProfileAvgAggregate {

    @Field(() => Float, {nullable:true})
    phone?: number;

    @Field(() => Float, {nullable:true})
    point?: number;

    @Field(() => Float, {nullable:true})
    level?: number;
}

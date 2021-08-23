import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => Int, {nullable:true})
    rate?: number;

    @Field(() => String, {nullable:true})
    description?: string;
}

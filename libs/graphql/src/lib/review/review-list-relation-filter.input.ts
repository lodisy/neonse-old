import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';

@InputType()
export class ReviewListRelationFilter {

    @Field(() => ReviewWhereInput, {nullable:true})
    every?: ReviewWhereInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    some?: ReviewWhereInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    none?: ReviewWhereInput;
}

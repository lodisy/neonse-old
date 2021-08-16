import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';

@InputType()
export class ReviewRelationFilter {

    @Field(() => ReviewWhereInput, {nullable:true})
    is?: ReviewWhereInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    isNot?: ReviewWhereInput;
}

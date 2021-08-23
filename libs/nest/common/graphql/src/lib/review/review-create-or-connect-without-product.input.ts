import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewCreateWithoutProductInput } from './review-create-without-product.input';

@InputType()
export class ReviewCreateOrConnectWithoutProductInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutProductInput, {nullable:false})
    create!: ReviewCreateWithoutProductInput;
}

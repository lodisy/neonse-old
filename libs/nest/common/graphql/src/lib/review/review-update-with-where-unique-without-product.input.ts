import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutProductInput } from './review-update-without-product.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutProductInput, {nullable:false})
    data!: ReviewUpdateWithoutProductInput;
}

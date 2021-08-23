import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutProductInput } from './review-update-without-product.input';
import { ReviewCreateWithoutProductInput } from './review-create-without-product.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutProductInput, {nullable:false})
    update!: ReviewUpdateWithoutProductInput;

    @Field(() => ReviewCreateWithoutProductInput, {nullable:false})
    create!: ReviewCreateWithoutProductInput;
}

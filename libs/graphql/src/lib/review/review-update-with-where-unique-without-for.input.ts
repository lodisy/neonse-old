import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutForInput } from './review-update-without-for.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutForInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutForInput, {nullable:false})
    data!: ReviewUpdateWithoutForInput;
}

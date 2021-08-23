import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutByInput } from './review-update-without-by.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutByInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutByInput, {nullable:false})
    data!: ReviewUpdateWithoutByInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@ArgsType()
export class FindUniqueReviewArgs {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;
}

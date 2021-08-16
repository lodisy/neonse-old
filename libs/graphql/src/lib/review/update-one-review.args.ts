import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewUpdateInput } from './review-update.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@ArgsType()
export class UpdateOneReviewArgs {

    @Field(() => ReviewUpdateInput, {nullable:false})
    data!: ReviewUpdateInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;
}

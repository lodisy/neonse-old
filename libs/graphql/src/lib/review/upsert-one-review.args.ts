import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewCreateInput } from './review-create.input';
import { ReviewUpdateInput } from './review-update.input';

@ArgsType()
export class UpsertOneReviewArgs {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateInput, {nullable:false})
    create!: ReviewCreateInput;

    @Field(() => ReviewUpdateInput, {nullable:false})
    update!: ReviewUpdateInput;
}

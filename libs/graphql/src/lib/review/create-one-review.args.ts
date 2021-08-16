import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCreateInput } from './review-create.input';

@ArgsType()
export class CreateOneReviewArgs {

    @Field(() => ReviewCreateInput, {nullable:false})
    data!: ReviewCreateInput;
}

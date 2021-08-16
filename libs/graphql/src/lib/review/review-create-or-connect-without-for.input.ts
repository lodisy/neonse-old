import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewCreateWithoutForInput } from './review-create-without-for.input';

@InputType()
export class ReviewCreateOrConnectWithoutForInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutForInput, {nullable:false})
    create!: ReviewCreateWithoutForInput;
}

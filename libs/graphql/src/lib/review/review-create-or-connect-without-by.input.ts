import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewCreateWithoutByInput } from './review-create-without-by.input';

@InputType()
export class ReviewCreateOrConnectWithoutByInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutByInput, {nullable:false})
    create!: ReviewCreateWithoutByInput;
}

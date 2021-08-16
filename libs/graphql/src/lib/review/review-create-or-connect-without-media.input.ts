import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewCreateWithoutMediaInput } from './review-create-without-media.input';

@InputType()
export class ReviewCreateOrConnectWithoutMediaInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutMediaInput, {nullable:false})
    create!: ReviewCreateWithoutMediaInput;
}

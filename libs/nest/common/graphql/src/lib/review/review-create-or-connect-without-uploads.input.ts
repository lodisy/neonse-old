import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewCreateWithoutUploadsInput } from './review-create-without-uploads.input';

@InputType()
export class ReviewCreateOrConnectWithoutUploadsInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutUploadsInput, {nullable:false})
    create!: ReviewCreateWithoutUploadsInput;
}

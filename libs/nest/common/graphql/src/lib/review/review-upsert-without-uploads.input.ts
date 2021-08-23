import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutUploadsInput } from './review-update-without-uploads.input';
import { ReviewCreateWithoutUploadsInput } from './review-create-without-uploads.input';

@InputType()
export class ReviewUpsertWithoutUploadsInput {

    @Field(() => ReviewUpdateWithoutUploadsInput, {nullable:false})
    update!: ReviewUpdateWithoutUploadsInput;

    @Field(() => ReviewCreateWithoutUploadsInput, {nullable:false})
    create!: ReviewCreateWithoutUploadsInput;
}

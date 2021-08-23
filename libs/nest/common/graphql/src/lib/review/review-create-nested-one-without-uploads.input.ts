import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutUploadsInput } from './review-create-without-uploads.input';
import { ReviewCreateOrConnectWithoutUploadsInput } from './review-create-or-connect-without-uploads.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutUploadsInput {

    @Field(() => ReviewCreateWithoutUploadsInput, {nullable:true})
    create?: ReviewCreateWithoutUploadsInput;

    @Field(() => ReviewCreateOrConnectWithoutUploadsInput, {nullable:true})
    connectOrCreate?: ReviewCreateOrConnectWithoutUploadsInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    connect?: ReviewWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutUploadsInput } from './review-create-without-uploads.input';
import { ReviewCreateOrConnectWithoutUploadsInput } from './review-create-or-connect-without-uploads.input';
import { ReviewUpsertWithoutUploadsInput } from './review-upsert-without-uploads.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithoutUploadsInput } from './review-update-without-uploads.input';

@InputType()
export class ReviewUpdateOneWithoutUploadsInput {

    @Field(() => ReviewCreateWithoutUploadsInput, {nullable:true})
    create?: ReviewCreateWithoutUploadsInput;

    @Field(() => ReviewCreateOrConnectWithoutUploadsInput, {nullable:true})
    connectOrCreate?: ReviewCreateOrConnectWithoutUploadsInput;

    @Field(() => ReviewUpsertWithoutUploadsInput, {nullable:true})
    upsert?: ReviewUpsertWithoutUploadsInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    connect?: ReviewWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReviewUpdateWithoutUploadsInput, {nullable:true})
    update?: ReviewUpdateWithoutUploadsInput;
}

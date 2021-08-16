import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutMediaInput } from './review-create-without-media.input';
import { ReviewCreateOrConnectWithoutMediaInput } from './review-create-or-connect-without-media.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutMediaInput {

    @Field(() => ReviewCreateWithoutMediaInput, {nullable:true})
    create?: ReviewCreateWithoutMediaInput;

    @Field(() => ReviewCreateOrConnectWithoutMediaInput, {nullable:true})
    connectOrCreate?: ReviewCreateOrConnectWithoutMediaInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    connect?: ReviewWhereUniqueInput;
}

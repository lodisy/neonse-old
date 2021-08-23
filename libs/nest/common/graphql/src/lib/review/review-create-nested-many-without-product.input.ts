import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutProductInput } from './review-create-without-product.input';
import { ReviewCreateOrConnectWithoutProductInput } from './review-create-or-connect-without-product.input';
import { ReviewCreateManyProductInputEnvelope } from './review-create-many-product-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutProductInput {

    @Field(() => [ReviewCreateWithoutProductInput], {nullable:true})
    create?: Array<ReviewCreateWithoutProductInput>;

    @Field(() => [ReviewCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutProductInput>;

    @Field(() => ReviewCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ReviewCreateManyProductInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewWhereUniqueInput>;
}

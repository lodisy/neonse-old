import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutProductInput } from './review-create-without-product.input';
import { ReviewCreateOrConnectWithoutProductInput } from './review-create-or-connect-without-product.input';
import { ReviewUpsertWithWhereUniqueWithoutProductInput } from './review-upsert-with-where-unique-without-product.input';
import { ReviewCreateManyProductInputEnvelope } from './review-create-many-product-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutProductInput } from './review-update-with-where-unique-without-product.input';
import { ReviewUpdateManyWithWhereWithoutProductInput } from './review-update-many-with-where-without-product.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUpdateManyWithoutProductInput {

    @Field(() => [ReviewCreateWithoutProductInput], {nullable:true})
    create?: Array<ReviewCreateWithoutProductInput>;

    @Field(() => [ReviewCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutProductInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ReviewCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ReviewCreateManyProductInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    set?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    delete?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<ReviewUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReviewScalarWhereInput>;
}

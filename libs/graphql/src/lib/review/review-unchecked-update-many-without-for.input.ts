import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutForInput } from './review-create-without-for.input';
import { ReviewCreateOrConnectWithoutForInput } from './review-create-or-connect-without-for.input';
import { ReviewUpsertWithWhereUniqueWithoutForInput } from './review-upsert-with-where-unique-without-for.input';
import { ReviewCreateManyForInputEnvelope } from './review-create-many-for-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutForInput } from './review-update-with-where-unique-without-for.input';
import { ReviewUpdateManyWithWhereWithoutForInput } from './review-update-many-with-where-without-for.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutForInput {

    @Field(() => [ReviewCreateWithoutForInput], {nullable:true})
    create?: Array<ReviewCreateWithoutForInput>;

    @Field(() => [ReviewCreateOrConnectWithoutForInput], {nullable:true})
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutForInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutForInput], {nullable:true})
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutForInput>;

    @Field(() => ReviewCreateManyForInputEnvelope, {nullable:true})
    createMany?: ReviewCreateManyForInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    set?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    delete?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutForInput], {nullable:true})
    update?: Array<ReviewUpdateWithWhereUniqueWithoutForInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutForInput], {nullable:true})
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutForInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReviewScalarWhereInput>;
}

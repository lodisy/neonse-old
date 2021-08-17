import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateWithoutByInput } from './review-create-without-by.input'
import { ReviewCreateOrConnectWithoutByInput } from './review-create-or-connect-without-by.input'
import { ReviewUpsertWithWhereUniqueWithoutByInput } from './review-upsert-with-where-unique-without-by.input'
import { ReviewCreateManyByInputEnvelope } from './review-create-many-by-input-envelope.input'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { ReviewUpdateWithWhereUniqueWithoutByInput } from './review-update-with-where-unique-without-by.input'
import { ReviewUpdateManyWithWhereWithoutByInput } from './review-update-many-with-where-without-by.input'
import { ReviewScalarWhereInput } from './review-scalar-where.input'

@InputType()
export class ReviewUncheckedUpdateManyWithoutByInput {
    @Field(() => [ReviewCreateWithoutByInput], { nullable: true })
    create?: Array<ReviewCreateWithoutByInput>

    @Field(() => [ReviewCreateOrConnectWithoutByInput], { nullable: true })
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutByInput>

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutByInput], { nullable: true })
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutByInput>

    @Field(() => ReviewCreateManyByInputEnvelope, { nullable: true })
    createMany?: ReviewCreateManyByInputEnvelope

    @Field(() => [ReviewWhereUniqueInput], { nullable: true })
    connect?: Array<ReviewWhereUniqueInput>

    @Field(() => [ReviewWhereUniqueInput], { nullable: true })
    set?: Array<ReviewWhereUniqueInput>

    @Field(() => [ReviewWhereUniqueInput], { nullable: true })
    disconnect?: Array<ReviewWhereUniqueInput>

    @Field(() => [ReviewWhereUniqueInput], { nullable: true })
    delete?: Array<ReviewWhereUniqueInput>

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutByInput], { nullable: true })
    update?: Array<ReviewUpdateWithWhereUniqueWithoutByInput>

    @Field(() => [ReviewUpdateManyWithWhereWithoutByInput], { nullable: true })
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutByInput>

    @Field(() => [ReviewScalarWhereInput], { nullable: true })
    deleteMany?: Array<ReviewScalarWhereInput>
}

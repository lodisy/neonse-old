import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LikeCreateWithoutByInput } from './like-create-without-by.input'
import { LikeCreateOrConnectWithoutByInput } from './like-create-or-connect-without-by.input'
import { LikeUpsertWithWhereUniqueWithoutByInput } from './like-upsert-with-where-unique-without-by.input'
import { LikeCreateManyByInputEnvelope } from './like-create-many-by-input-envelope.input'
import { LikeWhereUniqueInput } from './like-where-unique.input'
import { LikeUpdateWithWhereUniqueWithoutByInput } from './like-update-with-where-unique-without-by.input'
import { LikeUpdateManyWithWhereWithoutByInput } from './like-update-many-with-where-without-by.input'
import { LikeScalarWhereInput } from './like-scalar-where.input'

@InputType()
export class LikeUpdateManyWithoutByInput {
    @Field(() => [LikeCreateWithoutByInput], { nullable: true })
    create?: Array<LikeCreateWithoutByInput>

    @Field(() => [LikeCreateOrConnectWithoutByInput], { nullable: true })
    connectOrCreate?: Array<LikeCreateOrConnectWithoutByInput>

    @Field(() => [LikeUpsertWithWhereUniqueWithoutByInput], { nullable: true })
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutByInput>

    @Field(() => LikeCreateManyByInputEnvelope, { nullable: true })
    createMany?: LikeCreateManyByInputEnvelope

    @Field(() => [LikeWhereUniqueInput], { nullable: true })
    connect?: Array<LikeWhereUniqueInput>

    @Field(() => [LikeWhereUniqueInput], { nullable: true })
    set?: Array<LikeWhereUniqueInput>

    @Field(() => [LikeWhereUniqueInput], { nullable: true })
    disconnect?: Array<LikeWhereUniqueInput>

    @Field(() => [LikeWhereUniqueInput], { nullable: true })
    delete?: Array<LikeWhereUniqueInput>

    @Field(() => [LikeUpdateWithWhereUniqueWithoutByInput], { nullable: true })
    update?: Array<LikeUpdateWithWhereUniqueWithoutByInput>

    @Field(() => [LikeUpdateManyWithWhereWithoutByInput], { nullable: true })
    updateMany?: Array<LikeUpdateManyWithWhereWithoutByInput>

    @Field(() => [LikeScalarWhereInput], { nullable: true })
    deleteMany?: Array<LikeScalarWhereInput>
}

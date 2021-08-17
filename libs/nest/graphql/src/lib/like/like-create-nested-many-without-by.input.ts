import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LikeCreateWithoutByInput } from './like-create-without-by.input'
import { LikeCreateOrConnectWithoutByInput } from './like-create-or-connect-without-by.input'
import { LikeCreateManyByInputEnvelope } from './like-create-many-by-input-envelope.input'
import { LikeWhereUniqueInput } from './like-where-unique.input'

@InputType()
export class LikeCreateNestedManyWithoutByInput {
    @Field(() => [LikeCreateWithoutByInput], { nullable: true })
    create?: Array<LikeCreateWithoutByInput>

    @Field(() => [LikeCreateOrConnectWithoutByInput], { nullable: true })
    connectOrCreate?: Array<LikeCreateOrConnectWithoutByInput>

    @Field(() => LikeCreateManyByInputEnvelope, { nullable: true })
    createMany?: LikeCreateManyByInputEnvelope

    @Field(() => [LikeWhereUniqueInput], { nullable: true })
    connect?: Array<LikeWhereUniqueInput>
}

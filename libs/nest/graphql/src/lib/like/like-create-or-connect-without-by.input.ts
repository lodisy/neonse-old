import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LikeWhereUniqueInput } from './like-where-unique.input'
import { LikeCreateWithoutByInput } from './like-create-without-by.input'

@InputType()
export class LikeCreateOrConnectWithoutByInput {
    @Field(() => LikeWhereUniqueInput, { nullable: false })
    where!: LikeWhereUniqueInput

    @Field(() => LikeCreateWithoutByInput, { nullable: false })
    create!: LikeCreateWithoutByInput
}

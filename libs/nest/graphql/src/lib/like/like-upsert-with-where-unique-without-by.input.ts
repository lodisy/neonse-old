import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LikeWhereUniqueInput } from './like-where-unique.input'
import { LikeUpdateWithoutByInput } from './like-update-without-by.input'
import { LikeCreateWithoutByInput } from './like-create-without-by.input'

@InputType()
export class LikeUpsertWithWhereUniqueWithoutByInput {
    @Field(() => LikeWhereUniqueInput, { nullable: false })
    where!: LikeWhereUniqueInput

    @Field(() => LikeUpdateWithoutByInput, { nullable: false })
    update!: LikeUpdateWithoutByInput

    @Field(() => LikeCreateWithoutByInput, { nullable: false })
    create!: LikeCreateWithoutByInput
}

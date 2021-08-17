import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LikeUpdateManyMutationInput } from './like-update-many-mutation.input'
import { LikeWhereInput } from './like-where.input'

@ArgsType()
export class UpdateManyLikeArgs {
    @Field(() => LikeUpdateManyMutationInput, { nullable: false })
    data!: LikeUpdateManyMutationInput

    @Field(() => LikeWhereInput, { nullable: true })
    where?: LikeWhereInput
}

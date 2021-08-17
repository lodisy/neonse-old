import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LikeScalarWhereInput } from './like-scalar-where.input'
import { LikeUpdateManyMutationInput } from './like-update-many-mutation.input'

@InputType()
export class LikeUpdateManyWithWhereWithoutProductInput {
    @Field(() => LikeScalarWhereInput, { nullable: false })
    where!: LikeScalarWhereInput

    @Field(() => LikeUpdateManyMutationInput, { nullable: false })
    data!: LikeUpdateManyMutationInput
}

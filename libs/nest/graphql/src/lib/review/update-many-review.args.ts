import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ReviewUpdateManyMutationInput } from './review-update-many-mutation.input'
import { ReviewWhereInput } from './review-where.input'

@ArgsType()
export class UpdateManyReviewArgs {
    @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
    data!: ReviewUpdateManyMutationInput

    @Field(() => ReviewWhereInput, { nullable: true })
    where?: ReviewWhereInput
}

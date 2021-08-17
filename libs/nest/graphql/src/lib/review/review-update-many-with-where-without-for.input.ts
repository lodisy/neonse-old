import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewScalarWhereInput } from './review-scalar-where.input'
import { ReviewUpdateManyMutationInput } from './review-update-many-mutation.input'

@InputType()
export class ReviewUpdateManyWithWhereWithoutForInput {
    @Field(() => ReviewScalarWhereInput, { nullable: false })
    where!: ReviewScalarWhereInput

    @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
    data!: ReviewUpdateManyMutationInput
}

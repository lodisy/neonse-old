import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ReviewWhereInput } from './review-where.input'

@ArgsType()
export class DeleteManyReviewArgs {
    @Field(() => ReviewWhereInput, { nullable: true })
    where?: ReviewWhereInput
}

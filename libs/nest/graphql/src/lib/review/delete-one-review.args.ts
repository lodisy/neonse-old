import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ReviewWhereUniqueInput } from './review-where-unique.input'

@ArgsType()
export class DeleteOneReviewArgs {
    @Field(() => ReviewWhereUniqueInput, { nullable: false })
    where!: ReviewWhereUniqueInput
}

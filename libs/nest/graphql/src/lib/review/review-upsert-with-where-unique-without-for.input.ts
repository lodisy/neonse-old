import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { ReviewUpdateWithoutForInput } from './review-update-without-for.input'
import { ReviewCreateWithoutForInput } from './review-create-without-for.input'

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutForInput {
    @Field(() => ReviewWhereUniqueInput, { nullable: false })
    where!: ReviewWhereUniqueInput

    @Field(() => ReviewUpdateWithoutForInput, { nullable: false })
    update!: ReviewUpdateWithoutForInput

    @Field(() => ReviewCreateWithoutForInput, { nullable: false })
    create!: ReviewCreateWithoutForInput
}

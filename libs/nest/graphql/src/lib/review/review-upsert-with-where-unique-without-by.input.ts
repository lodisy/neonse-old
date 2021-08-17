import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { ReviewUpdateWithoutByInput } from './review-update-without-by.input'
import { ReviewCreateWithoutByInput } from './review-create-without-by.input'

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutByInput {
    @Field(() => ReviewWhereUniqueInput, { nullable: false })
    where!: ReviewWhereUniqueInput

    @Field(() => ReviewUpdateWithoutByInput, { nullable: false })
    update!: ReviewUpdateWithoutByInput

    @Field(() => ReviewCreateWithoutByInput, { nullable: false })
    create!: ReviewCreateWithoutByInput
}

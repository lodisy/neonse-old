import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewUpdateWithoutMediaInput } from './review-update-without-media.input'
import { ReviewCreateWithoutMediaInput } from './review-create-without-media.input'

@InputType()
export class ReviewUpsertWithoutMediaInput {
    @Field(() => ReviewUpdateWithoutMediaInput, { nullable: false })
    update!: ReviewUpdateWithoutMediaInput

    @Field(() => ReviewCreateWithoutMediaInput, { nullable: false })
    create!: ReviewCreateWithoutMediaInput
}

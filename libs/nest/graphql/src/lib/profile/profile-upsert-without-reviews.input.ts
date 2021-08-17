import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileUpdateWithoutReviewsInput } from './profile-update-without-reviews.input'
import { ProfileCreateWithoutReviewsInput } from './profile-create-without-reviews.input'

@InputType()
export class ProfileUpsertWithoutReviewsInput {
    @Field(() => ProfileUpdateWithoutReviewsInput, { nullable: false })
    update!: ProfileUpdateWithoutReviewsInput

    @Field(() => ProfileCreateWithoutReviewsInput, { nullable: false })
    create!: ProfileCreateWithoutReviewsInput
}

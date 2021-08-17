import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileUpdateWithoutLikesInput } from './profile-update-without-likes.input'
import { ProfileCreateWithoutLikesInput } from './profile-create-without-likes.input'

@InputType()
export class ProfileUpsertWithoutLikesInput {
    @Field(() => ProfileUpdateWithoutLikesInput, { nullable: false })
    update!: ProfileUpdateWithoutLikesInput

    @Field(() => ProfileCreateWithoutLikesInput, { nullable: false })
    create!: ProfileCreateWithoutLikesInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileUpdateWithoutAvatarInput } from './profile-update-without-avatar.input'
import { ProfileCreateWithoutAvatarInput } from './profile-create-without-avatar.input'

@InputType()
export class ProfileUpsertWithoutAvatarInput {
    @Field(() => ProfileUpdateWithoutAvatarInput, { nullable: false })
    update!: ProfileUpdateWithoutAvatarInput

    @Field(() => ProfileCreateWithoutAvatarInput, { nullable: false })
    create!: ProfileCreateWithoutAvatarInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileUpdateWithoutUploadsInput } from './profile-update-without-uploads.input'
import { ProfileCreateWithoutUploadsInput } from './profile-create-without-uploads.input'

@InputType()
export class ProfileUpsertWithoutUploadsInput {
    @Field(() => ProfileUpdateWithoutUploadsInput, { nullable: false })
    update!: ProfileUpdateWithoutUploadsInput

    @Field(() => ProfileCreateWithoutUploadsInput, { nullable: false })
    create!: ProfileCreateWithoutUploadsInput
}

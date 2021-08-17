import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileUpdateWithoutProfileAvatarInput } from './file-update-without-profile-avatar.input'
import { FileCreateWithoutProfileAvatarInput } from './file-create-without-profile-avatar.input'

@InputType()
export class FileUpsertWithoutProfileAvatarInput {
    @Field(() => FileUpdateWithoutProfileAvatarInput, { nullable: false })
    update!: FileUpdateWithoutProfileAvatarInput

    @Field(() => FileCreateWithoutProfileAvatarInput, { nullable: false })
    create!: FileCreateWithoutProfileAvatarInput
}

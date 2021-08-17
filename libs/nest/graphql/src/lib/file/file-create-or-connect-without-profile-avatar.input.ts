import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileCreateWithoutProfileAvatarInput } from './file-create-without-profile-avatar.input'

@InputType()
export class FileCreateOrConnectWithoutProfileAvatarInput {
    @Field(() => FileWhereUniqueInput, { nullable: false })
    where!: FileWhereUniqueInput

    @Field(() => FileCreateWithoutProfileAvatarInput, { nullable: false })
    create!: FileCreateWithoutProfileAvatarInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileCreateWithoutProfileAvatarInput } from './file-create-without-profile-avatar.input'
import { FileCreateOrConnectWithoutProfileAvatarInput } from './file-create-or-connect-without-profile-avatar.input'
import { FileWhereUniqueInput } from './file-where-unique.input'

@InputType()
export class FileUncheckedCreateNestedOneWithoutProfileAvatarInput {
    @Field(() => FileCreateWithoutProfileAvatarInput, { nullable: true })
    create?: FileCreateWithoutProfileAvatarInput

    @Field(() => FileCreateOrConnectWithoutProfileAvatarInput, { nullable: true })
    connectOrCreate?: FileCreateOrConnectWithoutProfileAvatarInput

    @Field(() => FileWhereUniqueInput, { nullable: true })
    connect?: FileWhereUniqueInput
}

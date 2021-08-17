import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileCreateWithoutProfileAvatarInput } from './file-create-without-profile-avatar.input'
import { FileCreateOrConnectWithoutProfileAvatarInput } from './file-create-or-connect-without-profile-avatar.input'
import { FileUpsertWithoutProfileAvatarInput } from './file-upsert-without-profile-avatar.input'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileUpdateWithoutProfileAvatarInput } from './file-update-without-profile-avatar.input'

@InputType()
export class FileUncheckedUpdateOneWithoutProfileAvatarInput {
    @Field(() => FileCreateWithoutProfileAvatarInput, { nullable: true })
    create?: FileCreateWithoutProfileAvatarInput

    @Field(() => FileCreateOrConnectWithoutProfileAvatarInput, { nullable: true })
    connectOrCreate?: FileCreateOrConnectWithoutProfileAvatarInput

    @Field(() => FileUpsertWithoutProfileAvatarInput, { nullable: true })
    upsert?: FileUpsertWithoutProfileAvatarInput

    @Field(() => FileWhereUniqueInput, { nullable: true })
    connect?: FileWhereUniqueInput

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean

    @Field(() => Boolean, { nullable: true })
    delete?: boolean

    @Field(() => FileUpdateWithoutProfileAvatarInput, { nullable: true })
    update?: FileUpdateWithoutProfileAvatarInput
}

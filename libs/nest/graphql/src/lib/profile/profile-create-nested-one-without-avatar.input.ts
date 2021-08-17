import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutAvatarInput } from './profile-create-without-avatar.input'
import { ProfileCreateOrConnectWithoutAvatarInput } from './profile-create-or-connect-without-avatar.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'

@InputType()
export class ProfileCreateNestedOneWithoutAvatarInput {
    @Field(() => ProfileCreateWithoutAvatarInput, { nullable: true })
    create?: ProfileCreateWithoutAvatarInput

    @Field(() => ProfileCreateOrConnectWithoutAvatarInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput
}

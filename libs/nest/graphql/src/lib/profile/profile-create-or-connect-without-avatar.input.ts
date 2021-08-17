import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileCreateWithoutAvatarInput } from './profile-create-without-avatar.input'

@InputType()
export class ProfileCreateOrConnectWithoutAvatarInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput

    @Field(() => ProfileCreateWithoutAvatarInput, { nullable: false })
    create!: ProfileCreateWithoutAvatarInput
}

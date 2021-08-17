import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutFollowingInput } from './profile-update-without-following.input'
import { ProfileCreateWithoutFollowingInput } from './profile-create-without-following.input'

@InputType()
export class ProfileUpsertWithWhereUniqueWithoutFollowingInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput

    @Field(() => ProfileUpdateWithoutFollowingInput, { nullable: false })
    update!: ProfileUpdateWithoutFollowingInput

    @Field(() => ProfileCreateWithoutFollowingInput, { nullable: false })
    create!: ProfileCreateWithoutFollowingInput
}

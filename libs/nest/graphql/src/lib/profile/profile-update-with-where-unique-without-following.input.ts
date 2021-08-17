import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutFollowingInput } from './profile-update-without-following.input'

@InputType()
export class ProfileUpdateWithWhereUniqueWithoutFollowingInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput

    @Field(() => ProfileUpdateWithoutFollowingInput, { nullable: false })
    data!: ProfileUpdateWithoutFollowingInput
}

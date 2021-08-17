import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutFollowingInput } from './profile-create-without-following.input'
import { ProfileCreateOrConnectWithoutFollowingInput } from './profile-create-or-connect-without-following.input'
import { ProfileUpsertWithWhereUniqueWithoutFollowingInput } from './profile-upsert-with-where-unique-without-following.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithWhereUniqueWithoutFollowingInput } from './profile-update-with-where-unique-without-following.input'
import { ProfileUpdateManyWithWhereWithoutFollowingInput } from './profile-update-many-with-where-without-following.input'
import { ProfileScalarWhereInput } from './profile-scalar-where.input'

@InputType()
export class ProfileUpdateManyWithoutFollowingInput {
    @Field(() => [ProfileCreateWithoutFollowingInput], { nullable: true })
    create?: Array<ProfileCreateWithoutFollowingInput>

    @Field(() => [ProfileCreateOrConnectWithoutFollowingInput], { nullable: true })
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutFollowingInput>

    @Field(() => [ProfileUpsertWithWhereUniqueWithoutFollowingInput], { nullable: true })
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutFollowingInput>

    @Field(() => [ProfileWhereUniqueInput], { nullable: true })
    connect?: Array<ProfileWhereUniqueInput>

    @Field(() => [ProfileWhereUniqueInput], { nullable: true })
    set?: Array<ProfileWhereUniqueInput>

    @Field(() => [ProfileWhereUniqueInput], { nullable: true })
    disconnect?: Array<ProfileWhereUniqueInput>

    @Field(() => [ProfileWhereUniqueInput], { nullable: true })
    delete?: Array<ProfileWhereUniqueInput>

    @Field(() => [ProfileUpdateWithWhereUniqueWithoutFollowingInput], { nullable: true })
    update?: Array<ProfileUpdateWithWhereUniqueWithoutFollowingInput>

    @Field(() => [ProfileUpdateManyWithWhereWithoutFollowingInput], { nullable: true })
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutFollowingInput>

    @Field(() => [ProfileScalarWhereInput], { nullable: true })
    deleteMany?: Array<ProfileScalarWhereInput>
}

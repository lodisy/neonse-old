import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutLikesInput } from './profile-create-without-likes.input'
import { ProfileCreateOrConnectWithoutLikesInput } from './profile-create-or-connect-without-likes.input'
import { ProfileUpsertWithoutLikesInput } from './profile-upsert-without-likes.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutLikesInput } from './profile-update-without-likes.input'

@InputType()
export class ProfileUpdateOneRequiredWithoutLikesInput {
    @Field(() => ProfileCreateWithoutLikesInput, { nullable: true })
    create?: ProfileCreateWithoutLikesInput

    @Field(() => ProfileCreateOrConnectWithoutLikesInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutLikesInput

    @Field(() => ProfileUpsertWithoutLikesInput, { nullable: true })
    upsert?: ProfileUpsertWithoutLikesInput

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput

    @Field(() => ProfileUpdateWithoutLikesInput, { nullable: true })
    update?: ProfileUpdateWithoutLikesInput
}

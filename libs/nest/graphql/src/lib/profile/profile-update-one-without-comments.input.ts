import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutCommentsInput } from './profile-create-without-comments.input'
import { ProfileCreateOrConnectWithoutCommentsInput } from './profile-create-or-connect-without-comments.input'
import { ProfileUpsertWithoutCommentsInput } from './profile-upsert-without-comments.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutCommentsInput } from './profile-update-without-comments.input'

@InputType()
export class ProfileUpdateOneWithoutCommentsInput {
    @Field(() => ProfileCreateWithoutCommentsInput, { nullable: true })
    create?: ProfileCreateWithoutCommentsInput

    @Field(() => ProfileCreateOrConnectWithoutCommentsInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput

    @Field(() => ProfileUpsertWithoutCommentsInput, { nullable: true })
    upsert?: ProfileUpsertWithoutCommentsInput

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean

    @Field(() => Boolean, { nullable: true })
    delete?: boolean

    @Field(() => ProfileUpdateWithoutCommentsInput, { nullable: true })
    update?: ProfileUpdateWithoutCommentsInput
}

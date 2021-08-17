import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutCommentsInput } from './profile-create-without-comments.input'
import { ProfileCreateOrConnectWithoutCommentsInput } from './profile-create-or-connect-without-comments.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'

@InputType()
export class ProfileCreateNestedOneWithoutCommentsInput {
    @Field(() => ProfileCreateWithoutCommentsInput, { nullable: true })
    create?: ProfileCreateWithoutCommentsInput

    @Field(() => ProfileCreateOrConnectWithoutCommentsInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput
}

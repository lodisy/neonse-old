import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutCardsInput } from './profile-create-without-cards.input'
import { ProfileCreateOrConnectWithoutCardsInput } from './profile-create-or-connect-without-cards.input'
import { ProfileUpsertWithoutCardsInput } from './profile-upsert-without-cards.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutCardsInput } from './profile-update-without-cards.input'

@InputType()
export class ProfileUpdateOneRequiredWithoutCardsInput {
    @Field(() => ProfileCreateWithoutCardsInput, { nullable: true })
    create?: ProfileCreateWithoutCardsInput

    @Field(() => ProfileCreateOrConnectWithoutCardsInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutCardsInput

    @Field(() => ProfileUpsertWithoutCardsInput, { nullable: true })
    upsert?: ProfileUpsertWithoutCardsInput

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput

    @Field(() => ProfileUpdateWithoutCardsInput, { nullable: true })
    update?: ProfileUpdateWithoutCardsInput
}

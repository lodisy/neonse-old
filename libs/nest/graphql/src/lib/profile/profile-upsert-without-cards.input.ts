import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileUpdateWithoutCardsInput } from './profile-update-without-cards.input'
import { ProfileCreateWithoutCardsInput } from './profile-create-without-cards.input'

@InputType()
export class ProfileUpsertWithoutCardsInput {
    @Field(() => ProfileUpdateWithoutCardsInput, { nullable: false })
    update!: ProfileUpdateWithoutCardsInput

    @Field(() => ProfileCreateWithoutCardsInput, { nullable: false })
    create!: ProfileCreateWithoutCardsInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileCreateWithoutCardsInput } from './profile-create-without-cards.input'

@InputType()
export class ProfileCreateOrConnectWithoutCardsInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput

    @Field(() => ProfileCreateWithoutCardsInput, { nullable: false })
    create!: ProfileCreateWithoutCardsInput
}

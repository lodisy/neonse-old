import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CardWhereUniqueInput } from './card-where-unique.input'
import { CardUpdateWithoutCardHolderInput } from './card-update-without-card-holder.input'
import { CardCreateWithoutCardHolderInput } from './card-create-without-card-holder.input'

@InputType()
export class CardUpsertWithWhereUniqueWithoutCardHolderInput {
    @Field(() => CardWhereUniqueInput, { nullable: false })
    where!: CardWhereUniqueInput

    @Field(() => CardUpdateWithoutCardHolderInput, { nullable: false })
    update!: CardUpdateWithoutCardHolderInput

    @Field(() => CardCreateWithoutCardHolderInput, { nullable: false })
    create!: CardCreateWithoutCardHolderInput
}

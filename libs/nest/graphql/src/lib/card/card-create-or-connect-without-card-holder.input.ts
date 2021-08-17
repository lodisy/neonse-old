import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CardWhereUniqueInput } from './card-where-unique.input'
import { CardCreateWithoutCardHolderInput } from './card-create-without-card-holder.input'

@InputType()
export class CardCreateOrConnectWithoutCardHolderInput {
    @Field(() => CardWhereUniqueInput, { nullable: false })
    where!: CardWhereUniqueInput

    @Field(() => CardCreateWithoutCardHolderInput, { nullable: false })
    create!: CardCreateWithoutCardHolderInput
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CardUpdateInput } from './card-update.input'
import { CardWhereUniqueInput } from './card-where-unique.input'

@ArgsType()
export class UpdateOneCardArgs {
    @Field(() => CardUpdateInput, { nullable: false })
    data!: CardUpdateInput

    @Field(() => CardWhereUniqueInput, { nullable: false })
    where!: CardWhereUniqueInput
}

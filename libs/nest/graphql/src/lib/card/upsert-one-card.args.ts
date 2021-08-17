import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CardWhereUniqueInput } from './card-where-unique.input'
import { CardCreateInput } from './card-create.input'
import { CardUpdateInput } from './card-update.input'

@ArgsType()
export class UpsertOneCardArgs {
    @Field(() => CardWhereUniqueInput, { nullable: false })
    where!: CardWhereUniqueInput

    @Field(() => CardCreateInput, { nullable: false })
    create!: CardCreateInput

    @Field(() => CardUpdateInput, { nullable: false })
    update!: CardUpdateInput
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CardWhereUniqueInput } from './card-where-unique.input'

@ArgsType()
export class DeleteOneCardArgs {
    @Field(() => CardWhereUniqueInput, { nullable: false })
    where!: CardWhereUniqueInput
}

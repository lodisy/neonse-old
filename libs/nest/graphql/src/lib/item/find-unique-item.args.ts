import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ItemWhereUniqueInput } from './item-where-unique.input'

@ArgsType()
export class FindUniqueItemArgs {
    @Field(() => ItemWhereUniqueInput, { nullable: false })
    where!: ItemWhereUniqueInput
}

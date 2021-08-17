import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ItemCreateInput } from './item-create.input'

@ArgsType()
export class CreateOneItemArgs {
    @Field(() => ItemCreateInput, { nullable: false })
    data!: ItemCreateInput
}

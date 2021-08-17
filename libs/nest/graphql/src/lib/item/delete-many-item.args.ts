import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ItemWhereInput } from './item-where.input'

@ArgsType()
export class DeleteManyItemArgs {
    @Field(() => ItemWhereInput, { nullable: true })
    where?: ItemWhereInput
}

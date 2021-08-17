import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ItemUpdateManyMutationInput } from './item-update-many-mutation.input'
import { ItemWhereInput } from './item-where.input'

@ArgsType()
export class UpdateManyItemArgs {
    @Field(() => ItemUpdateManyMutationInput, { nullable: false })
    data!: ItemUpdateManyMutationInput

    @Field(() => ItemWhereInput, { nullable: true })
    where?: ItemWhereInput
}

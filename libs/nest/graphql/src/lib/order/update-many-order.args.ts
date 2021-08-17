import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderUpdateManyMutationInput } from './order-update-many-mutation.input'
import { OrderWhereInput } from './order-where.input'

@ArgsType()
export class UpdateManyOrderArgs {
    @Field(() => OrderUpdateManyMutationInput, { nullable: false })
    data!: OrderUpdateManyMutationInput

    @Field(() => OrderWhereInput, { nullable: true })
    where?: OrderWhereInput
}

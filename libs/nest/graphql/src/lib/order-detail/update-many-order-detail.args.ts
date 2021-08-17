import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderDetailUpdateManyMutationInput } from './order-detail-update-many-mutation.input'
import { OrderDetailWhereInput } from './order-detail-where.input'

@ArgsType()
export class UpdateManyOrderDetailArgs {
    @Field(() => OrderDetailUpdateManyMutationInput, { nullable: false })
    data!: OrderDetailUpdateManyMutationInput

    @Field(() => OrderDetailWhereInput, { nullable: true })
    where?: OrderDetailWhereInput
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderDetailUpdateInput } from './order-detail-update.input'
import { OrderDetailWhereUniqueInput } from './order-detail-where-unique.input'

@ArgsType()
export class UpdateOneOrderDetailArgs {
    @Field(() => OrderDetailUpdateInput, { nullable: false })
    data!: OrderDetailUpdateInput

    @Field(() => OrderDetailWhereUniqueInput, { nullable: false })
    where!: OrderDetailWhereUniqueInput
}

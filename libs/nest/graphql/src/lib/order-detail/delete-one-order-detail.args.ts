import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderDetailWhereUniqueInput } from './order-detail-where-unique.input'

@ArgsType()
export class DeleteOneOrderDetailArgs {
    @Field(() => OrderDetailWhereUniqueInput, { nullable: false })
    where!: OrderDetailWhereUniqueInput
}

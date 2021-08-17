import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderDetailWhereInput } from './order-detail-where.input'

@ArgsType()
export class DeleteManyOrderDetailArgs {
    @Field(() => OrderDetailWhereInput, { nullable: true })
    where?: OrderDetailWhereInput
}

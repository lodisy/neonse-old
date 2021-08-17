import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderDetailWhereInput } from './order-detail-where.input'
import { OrderDetailOrderByInput } from './order-detail-order-by.input'
import { OrderDetailScalarFieldEnum } from './order-detail-scalar-field.enum'
import { OrderDetailScalarWhereWithAggregatesInput } from './order-detail-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { OrderDetailCountAggregateInput } from './order-detail-count-aggregate.input'
import { OrderDetailMinAggregateInput } from './order-detail-min-aggregate.input'
import { OrderDetailMaxAggregateInput } from './order-detail-max-aggregate.input'

@ArgsType()
export class OrderDetailGroupByArgs {
    @Field(() => OrderDetailWhereInput, { nullable: true })
    where?: OrderDetailWhereInput

    @Field(() => [OrderDetailOrderByInput], { nullable: true })
    orderBy?: Array<OrderDetailOrderByInput>

    @Field(() => [OrderDetailScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof OrderDetailScalarFieldEnum>

    @Field(() => OrderDetailScalarWhereWithAggregatesInput, { nullable: true })
    having?: OrderDetailScalarWhereWithAggregatesInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => OrderDetailCountAggregateInput, { nullable: true })
    _count?: OrderDetailCountAggregateInput

    @Field(() => OrderDetailMinAggregateInput, { nullable: true })
    _min?: OrderDetailMinAggregateInput

    @Field(() => OrderDetailMaxAggregateInput, { nullable: true })
    _max?: OrderDetailMaxAggregateInput
}

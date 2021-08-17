import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderDetailWhereInput } from './order-detail-where.input'
import { OrderDetailOrderByInput } from './order-detail-order-by.input'
import { OrderDetailWhereUniqueInput } from './order-detail-where-unique.input'
import { Int } from '@nestjs/graphql'
import { OrderDetailCountAggregateInput } from './order-detail-count-aggregate.input'
import { OrderDetailMinAggregateInput } from './order-detail-min-aggregate.input'
import { OrderDetailMaxAggregateInput } from './order-detail-max-aggregate.input'

@ArgsType()
export class OrderDetailAggregateArgs {
    @Field(() => OrderDetailWhereInput, { nullable: true })
    where?: OrderDetailWhereInput

    @Field(() => [OrderDetailOrderByInput], { nullable: true })
    orderBy?: Array<OrderDetailOrderByInput>

    @Field(() => OrderDetailWhereUniqueInput, { nullable: true })
    cursor?: OrderDetailWhereUniqueInput

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

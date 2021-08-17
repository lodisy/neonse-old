import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LikeWhereInput } from './like-where.input'
import { LikeOrderByInput } from './like-order-by.input'
import { LikeScalarFieldEnum } from './like-scalar-field.enum'
import { LikeScalarWhereWithAggregatesInput } from './like-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { LikeCountAggregateInput } from './like-count-aggregate.input'
import { LikeMinAggregateInput } from './like-min-aggregate.input'
import { LikeMaxAggregateInput } from './like-max-aggregate.input'

@ArgsType()
export class LikeGroupByArgs {
    @Field(() => LikeWhereInput, { nullable: true })
    where?: LikeWhereInput

    @Field(() => [LikeOrderByInput], { nullable: true })
    orderBy?: Array<LikeOrderByInput>

    @Field(() => [LikeScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof LikeScalarFieldEnum>

    @Field(() => LikeScalarWhereWithAggregatesInput, { nullable: true })
    having?: LikeScalarWhereWithAggregatesInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => LikeCountAggregateInput, { nullable: true })
    _count?: LikeCountAggregateInput

    @Field(() => LikeMinAggregateInput, { nullable: true })
    _min?: LikeMinAggregateInput

    @Field(() => LikeMaxAggregateInput, { nullable: true })
    _max?: LikeMaxAggregateInput
}

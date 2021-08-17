import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { CardCountAggregate } from './card-count-aggregate.output'
import { CardAvgAggregate } from './card-avg-aggregate.output'
import { CardSumAggregate } from './card-sum-aggregate.output'
import { CardMinAggregate } from './card-min-aggregate.output'
import { CardMaxAggregate } from './card-max-aggregate.output'

@ObjectType()
export class CardGroupBy {
    @Field(() => String, { nullable: false })
    id!: string

    @Field(() => String, { nullable: false })
    profileId!: string

    @Field(() => String, { nullable: false })
    number!: bigint | number

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => Date, { nullable: false })
    expiration!: Date | string

    @Field(() => String, { nullable: true })
    bank?: string

    @Field(() => CardCountAggregate, { nullable: true })
    _count?: CardCountAggregate

    @Field(() => CardAvgAggregate, { nullable: true })
    _avg?: CardAvgAggregate

    @Field(() => CardSumAggregate, { nullable: true })
    _sum?: CardSumAggregate

    @Field(() => CardMinAggregate, { nullable: true })
    _min?: CardMinAggregate

    @Field(() => CardMaxAggregate, { nullable: true })
    _max?: CardMaxAggregate
}

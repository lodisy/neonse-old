import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { AddressCountAggregate } from './address-count-aggregate.output'
import { AddressMinAggregate } from './address-min-aggregate.output'
import { AddressMaxAggregate } from './address-max-aggregate.output'

@ObjectType()
export class AggregateAddress {
    @Field(() => AddressCountAggregate, { nullable: true })
    _count?: AddressCountAggregate

    @Field(() => AddressCountAggregate, { nullable: true })
    count?: AddressCountAggregate

    @Field(() => AddressMinAggregate, { nullable: true })
    _min?: AddressMinAggregate

    @Field(() => AddressMinAggregate, { nullable: true })
    min?: AddressMinAggregate

    @Field(() => AddressMaxAggregate, { nullable: true })
    _max?: AddressMaxAggregate

    @Field(() => AddressMaxAggregate, { nullable: true })
    max?: AddressMaxAggregate
}

import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { AddressCountAggregate } from './address-count-aggregate.output'
import { AddressMinAggregate } from './address-min-aggregate.output'
import { AddressMaxAggregate } from './address-max-aggregate.output'

@ObjectType()
export class AddressGroupBy {
    @Field(() => String, { nullable: false })
    id!: string

    @Field(() => String, { nullable: false })
    profileId!: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: true })
    email?: string

    @Field(() => String, { nullable: true })
    phone?: string

    @Field(() => String, { nullable: false })
    street!: string

    @Field(() => String, { nullable: true })
    district?: string

    @Field(() => String, { nullable: false })
    city!: string

    @Field(() => String, { nullable: true })
    state?: string

    @Field(() => String, { nullable: true })
    zip?: string

    @Field(() => String, { nullable: false })
    country!: string

    @Field(() => AddressCountAggregate, { nullable: true })
    _count?: AddressCountAggregate

    @Field(() => AddressMinAggregate, { nullable: true })
    _min?: AddressMinAggregate

    @Field(() => AddressMaxAggregate, { nullable: true })
    _max?: AddressMaxAggregate
}

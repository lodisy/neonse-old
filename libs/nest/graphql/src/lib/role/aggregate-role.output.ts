import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { RoleCountAggregate } from './role-count-aggregate.output'
import { RoleMinAggregate } from './role-min-aggregate.output'
import { RoleMaxAggregate } from './role-max-aggregate.output'

@ObjectType()
export class AggregateRole {
    @Field(() => RoleCountAggregate, { nullable: true })
    _count?: RoleCountAggregate

    @Field(() => RoleCountAggregate, { nullable: true })
    count?: RoleCountAggregate

    @Field(() => RoleMinAggregate, { nullable: true })
    _min?: RoleMinAggregate

    @Field(() => RoleMinAggregate, { nullable: true })
    min?: RoleMinAggregate

    @Field(() => RoleMaxAggregate, { nullable: true })
    _max?: RoleMaxAggregate

    @Field(() => RoleMaxAggregate, { nullable: true })
    max?: RoleMaxAggregate
}

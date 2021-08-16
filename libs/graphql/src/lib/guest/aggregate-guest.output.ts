import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GuestCountAggregate } from './guest-count-aggregate.output';
import { GuestMinAggregate } from './guest-min-aggregate.output';
import { GuestMaxAggregate } from './guest-max-aggregate.output';

@ObjectType()
export class AggregateGuest {

    @Field(() => GuestCountAggregate, {nullable:true})
    _count?: GuestCountAggregate;

    @Field(() => GuestCountAggregate, {nullable:true})
    count?: GuestCountAggregate;

    @Field(() => GuestMinAggregate, {nullable:true})
    _min?: GuestMinAggregate;

    @Field(() => GuestMinAggregate, {nullable:true})
    min?: GuestMinAggregate;

    @Field(() => GuestMaxAggregate, {nullable:true})
    _max?: GuestMaxAggregate;

    @Field(() => GuestMaxAggregate, {nullable:true})
    max?: GuestMaxAggregate;
}

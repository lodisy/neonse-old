import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GuestCountAggregate } from './guest-count-aggregate.output';
import { GuestMinAggregate } from './guest-min-aggregate.output';
import { GuestMaxAggregate } from './guest-max-aggregate.output';

@ObjectType()
export class GuestGroupBy {

    @Field(() => String, {nullable:false})
    identifierToken!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => GuestCountAggregate, {nullable:true})
    _count?: GuestCountAggregate;

    @Field(() => GuestMinAggregate, {nullable:true})
    _min?: GuestMinAggregate;

    @Field(() => GuestMaxAggregate, {nullable:true})
    _max?: GuestMaxAggregate;
}

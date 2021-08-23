import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RefundCountAggregate } from './refund-count-aggregate.output';
import { RefundMinAggregate } from './refund-min-aggregate.output';
import { RefundMaxAggregate } from './refund-max-aggregate.output';

@ObjectType()
export class RefundGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => RefundCountAggregate, {nullable:true})
    _count?: RefundCountAggregate;

    @Field(() => RefundMinAggregate, {nullable:true})
    _min?: RefundMinAggregate;

    @Field(() => RefundMaxAggregate, {nullable:true})
    _max?: RefundMaxAggregate;
}

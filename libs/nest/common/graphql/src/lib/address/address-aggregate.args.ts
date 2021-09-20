import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { AddressOrderByWithRelationInput } from './address-order-by-with-relation.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressCountAggregateInput } from './address-count-aggregate.input';
import { AddressMinAggregateInput } from './address-min-aggregate.input';
import { AddressMaxAggregateInput } from './address-max-aggregate.input';

@ArgsType()
export class AddressAggregateArgs {

    @Field(() => AddressWhereInput, {nullable:true})
    where?: AddressWhereInput;

    @Field(() => [AddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AddressOrderByWithRelationInput>;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    cursor?: AddressWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AddressCountAggregateInput, {nullable:true})
    _count?: AddressCountAggregateInput;

    @Field(() => AddressMinAggregateInput, {nullable:true})
    _min?: AddressMinAggregateInput;

    @Field(() => AddressMaxAggregateInput, {nullable:true})
    _max?: AddressMaxAggregateInput;
}

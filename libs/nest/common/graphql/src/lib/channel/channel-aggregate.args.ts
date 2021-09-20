import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereInput } from './channel-where.input';
import { ChannelOrderByWithRelationInput } from './channel-order-by-with-relation.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChannelCountAggregateInput } from './channel-count-aggregate.input';
import { ChannelMinAggregateInput } from './channel-min-aggregate.input';
import { ChannelMaxAggregateInput } from './channel-max-aggregate.input';

@ArgsType()
export class ChannelAggregateArgs {

    @Field(() => ChannelWhereInput, {nullable:true})
    where?: ChannelWhereInput;

    @Field(() => [ChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChannelOrderByWithRelationInput>;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    cursor?: ChannelWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChannelCountAggregateInput, {nullable:true})
    _count?: ChannelCountAggregateInput;

    @Field(() => ChannelMinAggregateInput, {nullable:true})
    _min?: ChannelMinAggregateInput;

    @Field(() => ChannelMaxAggregateInput, {nullable:true})
    _max?: ChannelMaxAggregateInput;
}

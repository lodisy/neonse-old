import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChannelCountAggregate } from './channel-count-aggregate.output';
import { ChannelMinAggregate } from './channel-min-aggregate.output';
import { ChannelMaxAggregate } from './channel-max-aggregate.output';

@ObjectType()
export class AggregateChannel {

    @Field(() => ChannelCountAggregate, {nullable:true})
    _count?: ChannelCountAggregate;

    @Field(() => ChannelMinAggregate, {nullable:true})
    _min?: ChannelMinAggregate;

    @Field(() => ChannelMaxAggregate, {nullable:true})
    _max?: ChannelMaxAggregate;
}

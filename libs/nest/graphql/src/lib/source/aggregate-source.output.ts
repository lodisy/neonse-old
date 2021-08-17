import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { SourceCountAggregate } from './source-count-aggregate.output'
import { SourceMinAggregate } from './source-min-aggregate.output'
import { SourceMaxAggregate } from './source-max-aggregate.output'

@ObjectType()
export class AggregateSource {
    @Field(() => SourceCountAggregate, { nullable: true })
    _count?: SourceCountAggregate

    @Field(() => SourceCountAggregate, { nullable: true })
    count?: SourceCountAggregate

    @Field(() => SourceMinAggregate, { nullable: true })
    _min?: SourceMinAggregate

    @Field(() => SourceMinAggregate, { nullable: true })
    min?: SourceMinAggregate

    @Field(() => SourceMaxAggregate, { nullable: true })
    _max?: SourceMaxAggregate

    @Field(() => SourceMaxAggregate, { nullable: true })
    max?: SourceMaxAggregate
}

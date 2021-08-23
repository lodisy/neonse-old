import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SourceCountAggregate } from './source-count-aggregate.output';
import { SourceMinAggregate } from './source-min-aggregate.output';
import { SourceMaxAggregate } from './source-max-aggregate.output';

@ObjectType()
export class SourceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => SourceCountAggregate, {nullable:true})
    _count?: SourceCountAggregate;

    @Field(() => SourceMinAggregate, {nullable:true})
    _min?: SourceMinAggregate;

    @Field(() => SourceMaxAggregate, {nullable:true})
    _max?: SourceMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LocaleCountAggregate } from './locale-count-aggregate.output';
import { LocaleMinAggregate } from './locale-min-aggregate.output';
import { LocaleMaxAggregate } from './locale-max-aggregate.output';

@ObjectType()
export class LocaleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => LocaleCountAggregate, {nullable:true})
    _count?: LocaleCountAggregate;

    @Field(() => LocaleMinAggregate, {nullable:true})
    _min?: LocaleMinAggregate;

    @Field(() => LocaleMaxAggregate, {nullable:true})
    _max?: LocaleMaxAggregate;
}

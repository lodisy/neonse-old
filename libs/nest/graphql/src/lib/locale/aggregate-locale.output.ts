import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LocaleCountAggregate } from './locale-count-aggregate.output'
import { LocaleMinAggregate } from './locale-min-aggregate.output'
import { LocaleMaxAggregate } from './locale-max-aggregate.output'

@ObjectType()
export class AggregateLocale {
    @Field(() => LocaleCountAggregate, { nullable: true })
    _count?: LocaleCountAggregate

    @Field(() => LocaleCountAggregate, { nullable: true })
    count?: LocaleCountAggregate

    @Field(() => LocaleMinAggregate, { nullable: true })
    _min?: LocaleMinAggregate

    @Field(() => LocaleMinAggregate, { nullable: true })
    min?: LocaleMinAggregate

    @Field(() => LocaleMaxAggregate, { nullable: true })
    _max?: LocaleMaxAggregate

    @Field(() => LocaleMaxAggregate, { nullable: true })
    max?: LocaleMaxAggregate
}

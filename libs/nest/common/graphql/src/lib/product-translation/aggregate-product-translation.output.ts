import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductTranslationCountAggregate } from './product-translation-count-aggregate.output';
import { ProductTranslationMinAggregate } from './product-translation-min-aggregate.output';
import { ProductTranslationMaxAggregate } from './product-translation-max-aggregate.output';

@ObjectType()
export class AggregateProductTranslation {

    @Field(() => ProductTranslationCountAggregate, {nullable:true})
    _count?: ProductTranslationCountAggregate;

    @Field(() => ProductTranslationCountAggregate, {nullable:true})
    count?: ProductTranslationCountAggregate;

    @Field(() => ProductTranslationMinAggregate, {nullable:true})
    _min?: ProductTranslationMinAggregate;

    @Field(() => ProductTranslationMinAggregate, {nullable:true})
    min?: ProductTranslationMinAggregate;

    @Field(() => ProductTranslationMaxAggregate, {nullable:true})
    _max?: ProductTranslationMaxAggregate;

    @Field(() => ProductTranslationMaxAggregate, {nullable:true})
    max?: ProductTranslationMaxAggregate;
}

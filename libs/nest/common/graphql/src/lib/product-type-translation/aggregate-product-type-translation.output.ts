import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductTypeTranslationCountAggregate } from './product-type-translation-count-aggregate.output';
import { ProductTypeTranslationMinAggregate } from './product-type-translation-min-aggregate.output';
import { ProductTypeTranslationMaxAggregate } from './product-type-translation-max-aggregate.output';

@ObjectType()
export class AggregateProductTypeTranslation {

    @Field(() => ProductTypeTranslationCountAggregate, {nullable:true})
    _count?: ProductTypeTranslationCountAggregate;

    @Field(() => ProductTypeTranslationMinAggregate, {nullable:true})
    _min?: ProductTypeTranslationMinAggregate;

    @Field(() => ProductTypeTranslationMaxAggregate, {nullable:true})
    _max?: ProductTypeTranslationMaxAggregate;
}

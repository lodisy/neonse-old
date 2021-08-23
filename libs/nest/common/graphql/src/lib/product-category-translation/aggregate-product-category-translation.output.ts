import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductCategoryTranslationCountAggregate } from './product-category-translation-count-aggregate.output';
import { ProductCategoryTranslationMinAggregate } from './product-category-translation-min-aggregate.output';
import { ProductCategoryTranslationMaxAggregate } from './product-category-translation-max-aggregate.output';

@ObjectType()
export class AggregateProductCategoryTranslation {

    @Field(() => ProductCategoryTranslationCountAggregate, {nullable:true})
    _count?: ProductCategoryTranslationCountAggregate;

    @Field(() => ProductCategoryTranslationCountAggregate, {nullable:true})
    count?: ProductCategoryTranslationCountAggregate;

    @Field(() => ProductCategoryTranslationMinAggregate, {nullable:true})
    _min?: ProductCategoryTranslationMinAggregate;

    @Field(() => ProductCategoryTranslationMinAggregate, {nullable:true})
    min?: ProductCategoryTranslationMinAggregate;

    @Field(() => ProductCategoryTranslationMaxAggregate, {nullable:true})
    _max?: ProductCategoryTranslationMaxAggregate;

    @Field(() => ProductCategoryTranslationMaxAggregate, {nullable:true})
    max?: ProductCategoryTranslationMaxAggregate;
}

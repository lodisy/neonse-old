import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantColorTranslationCountAggregate } from './product-variant-color-translation-count-aggregate.output';
import { ProductVariantColorTranslationMinAggregate } from './product-variant-color-translation-min-aggregate.output';
import { ProductVariantColorTranslationMaxAggregate } from './product-variant-color-translation-max-aggregate.output';

@ObjectType()
export class AggregateProductVariantColorTranslation {

    @Field(() => ProductVariantColorTranslationCountAggregate, {nullable:true})
    _count?: ProductVariantColorTranslationCountAggregate;

    @Field(() => ProductVariantColorTranslationCountAggregate, {nullable:true})
    count?: ProductVariantColorTranslationCountAggregate;

    @Field(() => ProductVariantColorTranslationMinAggregate, {nullable:true})
    _min?: ProductVariantColorTranslationMinAggregate;

    @Field(() => ProductVariantColorTranslationMinAggregate, {nullable:true})
    min?: ProductVariantColorTranslationMinAggregate;

    @Field(() => ProductVariantColorTranslationMaxAggregate, {nullable:true})
    _max?: ProductVariantColorTranslationMaxAggregate;

    @Field(() => ProductVariantColorTranslationMaxAggregate, {nullable:true})
    max?: ProductVariantColorTranslationMaxAggregate;
}

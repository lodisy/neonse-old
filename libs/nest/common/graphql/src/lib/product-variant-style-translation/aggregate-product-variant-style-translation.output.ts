import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCountAggregate } from './product-variant-style-translation-count-aggregate.output';
import { ProductVariantStyleTranslationMinAggregate } from './product-variant-style-translation-min-aggregate.output';
import { ProductVariantStyleTranslationMaxAggregate } from './product-variant-style-translation-max-aggregate.output';

@ObjectType()
export class AggregateProductVariantStyleTranslation {

    @Field(() => ProductVariantStyleTranslationCountAggregate, {nullable:true})
    _count?: ProductVariantStyleTranslationCountAggregate;

    @Field(() => ProductVariantStyleTranslationCountAggregate, {nullable:true})
    count?: ProductVariantStyleTranslationCountAggregate;

    @Field(() => ProductVariantStyleTranslationMinAggregate, {nullable:true})
    _min?: ProductVariantStyleTranslationMinAggregate;

    @Field(() => ProductVariantStyleTranslationMinAggregate, {nullable:true})
    min?: ProductVariantStyleTranslationMinAggregate;

    @Field(() => ProductVariantStyleTranslationMaxAggregate, {nullable:true})
    _max?: ProductVariantStyleTranslationMaxAggregate;

    @Field(() => ProductVariantStyleTranslationMaxAggregate, {nullable:true})
    max?: ProductVariantStyleTranslationMaxAggregate;
}

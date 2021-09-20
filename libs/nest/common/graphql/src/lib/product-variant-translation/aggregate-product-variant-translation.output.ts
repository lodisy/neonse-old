import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantTranslationCountAggregate } from './product-variant-translation-count-aggregate.output';
import { ProductVariantTranslationMinAggregate } from './product-variant-translation-min-aggregate.output';
import { ProductVariantTranslationMaxAggregate } from './product-variant-translation-max-aggregate.output';

@ObjectType()
export class AggregateProductVariantTranslation {

    @Field(() => ProductVariantTranslationCountAggregate, {nullable:true})
    _count?: ProductVariantTranslationCountAggregate;

    @Field(() => ProductVariantTranslationMinAggregate, {nullable:true})
    _min?: ProductVariantTranslationMinAggregate;

    @Field(() => ProductVariantTranslationMaxAggregate, {nullable:true})
    _max?: ProductVariantTranslationMaxAggregate;
}

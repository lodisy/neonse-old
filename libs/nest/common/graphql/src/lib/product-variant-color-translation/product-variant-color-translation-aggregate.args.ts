import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereInput } from './product-variant-color-translation-where.input';
import { ProductVariantColorTranslationOrderByWithRelationInput } from './product-variant-color-translation-order-by-with-relation.input';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorTranslationCountAggregateInput } from './product-variant-color-translation-count-aggregate.input';
import { ProductVariantColorTranslationMinAggregateInput } from './product-variant-color-translation-min-aggregate.input';
import { ProductVariantColorTranslationMaxAggregateInput } from './product-variant-color-translation-max-aggregate.input';

@ArgsType()
export class ProductVariantColorTranslationAggregateArgs {

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    where?: ProductVariantColorTranslationWhereInput;

    @Field(() => [ProductVariantColorTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantColorTranslationOrderByWithRelationInput>;

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantColorTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantColorTranslationCountAggregateInput, {nullable:true})
    _count?: ProductVariantColorTranslationCountAggregateInput;

    @Field(() => ProductVariantColorTranslationMinAggregateInput, {nullable:true})
    _min?: ProductVariantColorTranslationMinAggregateInput;

    @Field(() => ProductVariantColorTranslationMaxAggregateInput, {nullable:true})
    _max?: ProductVariantColorTranslationMaxAggregateInput;
}

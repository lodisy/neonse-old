import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereInput } from './product-variant-style-translation-where.input';
import { ProductVariantStyleTranslationOrderByWithRelationInput } from './product-variant-style-translation-order-by-with-relation.input';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCountAggregateInput } from './product-variant-style-translation-count-aggregate.input';
import { ProductVariantStyleTranslationMinAggregateInput } from './product-variant-style-translation-min-aggregate.input';
import { ProductVariantStyleTranslationMaxAggregateInput } from './product-variant-style-translation-max-aggregate.input';

@ArgsType()
export class ProductVariantStyleTranslationAggregateArgs {

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    where?: ProductVariantStyleTranslationWhereInput;

    @Field(() => [ProductVariantStyleTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantStyleTranslationOrderByWithRelationInput>;

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantStyleTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantStyleTranslationCountAggregateInput, {nullable:true})
    _count?: ProductVariantStyleTranslationCountAggregateInput;

    @Field(() => ProductVariantStyleTranslationMinAggregateInput, {nullable:true})
    _min?: ProductVariantStyleTranslationMinAggregateInput;

    @Field(() => ProductVariantStyleTranslationMaxAggregateInput, {nullable:true})
    _max?: ProductVariantStyleTranslationMaxAggregateInput;
}

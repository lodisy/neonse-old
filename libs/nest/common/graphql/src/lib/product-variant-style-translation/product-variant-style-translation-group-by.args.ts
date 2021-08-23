import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereInput } from './product-variant-style-translation-where.input';
import { ProductVariantStyleTranslationOrderByInput } from './product-variant-style-translation-order-by.input';
import { ProductVariantStyleTranslationScalarFieldEnum } from './product-variant-style-translation-scalar-field.enum';
import { ProductVariantStyleTranslationScalarWhereWithAggregatesInput } from './product-variant-style-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCountAggregateInput } from './product-variant-style-translation-count-aggregate.input';
import { ProductVariantStyleTranslationMinAggregateInput } from './product-variant-style-translation-min-aggregate.input';
import { ProductVariantStyleTranslationMaxAggregateInput } from './product-variant-style-translation-max-aggregate.input';

@ArgsType()
export class ProductVariantStyleTranslationGroupByArgs {

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    where?: ProductVariantStyleTranslationWhereInput;

    @Field(() => [ProductVariantStyleTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantStyleTranslationOrderByInput>;

    @Field(() => [ProductVariantStyleTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantStyleTranslationScalarFieldEnum>;

    @Field(() => ProductVariantStyleTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantStyleTranslationScalarWhereWithAggregatesInput;

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

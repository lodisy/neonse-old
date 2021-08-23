import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereInput } from './product-variant-color-translation-where.input';
import { ProductVariantColorTranslationOrderByInput } from './product-variant-color-translation-order-by.input';
import { ProductVariantColorTranslationScalarFieldEnum } from './product-variant-color-translation-scalar-field.enum';
import { ProductVariantColorTranslationScalarWhereWithAggregatesInput } from './product-variant-color-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorTranslationCountAggregateInput } from './product-variant-color-translation-count-aggregate.input';
import { ProductVariantColorTranslationMinAggregateInput } from './product-variant-color-translation-min-aggregate.input';
import { ProductVariantColorTranslationMaxAggregateInput } from './product-variant-color-translation-max-aggregate.input';

@ArgsType()
export class ProductVariantColorTranslationGroupByArgs {

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    where?: ProductVariantColorTranslationWhereInput;

    @Field(() => [ProductVariantColorTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantColorTranslationOrderByInput>;

    @Field(() => [ProductVariantColorTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantColorTranslationScalarFieldEnum>;

    @Field(() => ProductVariantColorTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantColorTranslationScalarWhereWithAggregatesInput;

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

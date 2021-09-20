import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereInput } from './product-variant-translation-where.input';
import { ProductVariantTranslationOrderByWithAggregationInput } from './product-variant-translation-order-by-with-aggregation.input';
import { ProductVariantTranslationScalarFieldEnum } from './product-variant-translation-scalar-field.enum';
import { ProductVariantTranslationScalarWhereWithAggregatesInput } from './product-variant-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantTranslationCountAggregateInput } from './product-variant-translation-count-aggregate.input';
import { ProductVariantTranslationMinAggregateInput } from './product-variant-translation-min-aggregate.input';
import { ProductVariantTranslationMaxAggregateInput } from './product-variant-translation-max-aggregate.input';

@ArgsType()
export class ProductVariantTranslationGroupByArgs {

    @Field(() => ProductVariantTranslationWhereInput, {nullable:true})
    where?: ProductVariantTranslationWhereInput;

    @Field(() => [ProductVariantTranslationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductVariantTranslationOrderByWithAggregationInput>;

    @Field(() => [ProductVariantTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantTranslationScalarFieldEnum>;

    @Field(() => ProductVariantTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantTranslationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantTranslationCountAggregateInput, {nullable:true})
    _count?: ProductVariantTranslationCountAggregateInput;

    @Field(() => ProductVariantTranslationMinAggregateInput, {nullable:true})
    _min?: ProductVariantTranslationMinAggregateInput;

    @Field(() => ProductVariantTranslationMaxAggregateInput, {nullable:true})
    _max?: ProductVariantTranslationMaxAggregateInput;
}

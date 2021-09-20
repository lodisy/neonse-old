import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereInput } from './product-variant-translation-where.input';
import { ProductVariantTranslationOrderByWithRelationInput } from './product-variant-translation-order-by-with-relation.input';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantTranslationCountAggregateInput } from './product-variant-translation-count-aggregate.input';
import { ProductVariantTranslationMinAggregateInput } from './product-variant-translation-min-aggregate.input';
import { ProductVariantTranslationMaxAggregateInput } from './product-variant-translation-max-aggregate.input';

@ArgsType()
export class ProductVariantTranslationAggregateArgs {

    @Field(() => ProductVariantTranslationWhereInput, {nullable:true})
    where?: ProductVariantTranslationWhereInput;

    @Field(() => [ProductVariantTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantTranslationOrderByWithRelationInput>;

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantTranslationWhereUniqueInput;

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

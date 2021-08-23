import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeWhereInput } from './product-variant-size-where.input';
import { ProductVariantSizeOrderByInput } from './product-variant-size-order-by.input';
import { ProductVariantSizeScalarFieldEnum } from './product-variant-size-scalar-field.enum';
import { ProductVariantSizeScalarWhereWithAggregatesInput } from './product-variant-size-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantSizeCountAggregateInput } from './product-variant-size-count-aggregate.input';
import { ProductVariantSizeMinAggregateInput } from './product-variant-size-min-aggregate.input';
import { ProductVariantSizeMaxAggregateInput } from './product-variant-size-max-aggregate.input';

@ArgsType()
export class ProductVariantSizeGroupByArgs {

    @Field(() => ProductVariantSizeWhereInput, {nullable:true})
    where?: ProductVariantSizeWhereInput;

    @Field(() => [ProductVariantSizeOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantSizeOrderByInput>;

    @Field(() => [ProductVariantSizeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantSizeScalarFieldEnum>;

    @Field(() => ProductVariantSizeScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantSizeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantSizeCountAggregateInput, {nullable:true})
    _count?: ProductVariantSizeCountAggregateInput;

    @Field(() => ProductVariantSizeMinAggregateInput, {nullable:true})
    _min?: ProductVariantSizeMinAggregateInput;

    @Field(() => ProductVariantSizeMaxAggregateInput, {nullable:true})
    _max?: ProductVariantSizeMaxAggregateInput;
}

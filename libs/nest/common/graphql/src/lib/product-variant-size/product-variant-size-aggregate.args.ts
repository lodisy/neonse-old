import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantSizeWhereInput } from './product-variant-size-where.input';
import { ProductVariantSizeOrderByWithRelationInput } from './product-variant-size-order-by-with-relation.input';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantSizeCountAggregateInput } from './product-variant-size-count-aggregate.input';
import { ProductVariantSizeMinAggregateInput } from './product-variant-size-min-aggregate.input';
import { ProductVariantSizeMaxAggregateInput } from './product-variant-size-max-aggregate.input';

@ArgsType()
export class ProductVariantSizeAggregateArgs {

    @Field(() => ProductVariantSizeWhereInput, {nullable:true})
    where?: ProductVariantSizeWhereInput;

    @Field(() => [ProductVariantSizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantSizeOrderByWithRelationInput>;

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantSizeWhereUniqueInput;

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

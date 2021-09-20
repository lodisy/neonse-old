import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleWhereInput } from './product-variant-style-where.input';
import { ProductVariantStyleOrderByWithRelationInput } from './product-variant-style-order-by-with-relation.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantStyleCountAggregateInput } from './product-variant-style-count-aggregate.input';
import { ProductVariantStyleMinAggregateInput } from './product-variant-style-min-aggregate.input';
import { ProductVariantStyleMaxAggregateInput } from './product-variant-style-max-aggregate.input';

@ArgsType()
export class ProductVariantStyleAggregateArgs {

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    where?: ProductVariantStyleWhereInput;

    @Field(() => [ProductVariantStyleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantStyleOrderByWithRelationInput>;

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantStyleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantStyleCountAggregateInput, {nullable:true})
    _count?: ProductVariantStyleCountAggregateInput;

    @Field(() => ProductVariantStyleMinAggregateInput, {nullable:true})
    _min?: ProductVariantStyleMinAggregateInput;

    @Field(() => ProductVariantStyleMaxAggregateInput, {nullable:true})
    _max?: ProductVariantStyleMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Size } from '../prisma/size.enum';
import { Int } from '@nestjs/graphql';
import { ProductVariantCountAggregate } from './product-variant-count-aggregate.output';
import { ProductVariantAvgAggregate } from './product-variant-avg-aggregate.output';
import { ProductVariantSumAggregate } from './product-variant-sum-aggregate.output';
import { ProductVariantMinAggregate } from './product-variant-min-aggregate.output';
import { ProductVariantMaxAggregate } from './product-variant-max-aggregate.output';

@ObjectType()
export class ProductVariantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => [String], {nullable:true})
    images?: Array<string>;

    @Field(() => String, {nullable:false})
    brands!: string;

    @Field(() => String, {nullable:false})
    style!: string;

    @Field(() => Size, {nullable:false})
    size!: keyof typeof Size;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:true})
    sale?: number;

    @Field(() => Int, {nullable:true})
    stock?: number;

    @Field(() => Int, {nullable:false})
    sold!: number;

    @Field(() => ProductVariantCountAggregate, {nullable:true})
    _count?: ProductVariantCountAggregate;

    @Field(() => ProductVariantAvgAggregate, {nullable:true})
    _avg?: ProductVariantAvgAggregate;

    @Field(() => ProductVariantSumAggregate, {nullable:true})
    _sum?: ProductVariantSumAggregate;

    @Field(() => ProductVariantMinAggregate, {nullable:true})
    _min?: ProductVariantMinAggregate;

    @Field(() => ProductVariantMaxAggregate, {nullable:true})
    _max?: ProductVariantMaxAggregate;
}

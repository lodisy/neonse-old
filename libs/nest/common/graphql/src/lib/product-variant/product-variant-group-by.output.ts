import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantCountAggregate } from './product-variant-count-aggregate.output';
import { ProductVariantAvgAggregate } from './product-variant-avg-aggregate.output';
import { ProductVariantSumAggregate } from './product-variant-sum-aggregate.output';
import { ProductVariantMinAggregate } from './product-variant-min-aggregate.output';
import { ProductVariantMaxAggregate } from './product-variant-max-aggregate.output';

@ObjectType()
export class ProductVariantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    brands!: string;

    @Field(() => CurrencyCode, {nullable:false})
    currencyCode!: keyof typeof CurrencyCode;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:true})
    sale?: number;

    @Field(() => Int, {nullable:true})
    stock?: number;

    @Field(() => Int, {nullable:false})
    sold!: number;

    @Field(() => Boolean, {nullable:true})
    draft?: boolean;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields?: any;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

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

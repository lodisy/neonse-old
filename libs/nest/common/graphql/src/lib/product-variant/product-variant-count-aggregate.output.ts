import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    sku!: number;

    @Field(() => Int, {nullable:false})
    brands!: number;

    @Field(() => Int, {nullable:false})
    currencyCode!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    sale!: number;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:false})
    sold!: number;

    @Field(() => Int, {nullable:false})
    draft!: number;

    @Field(() => Int, {nullable:false})
    productId!: number;

    @Field(() => Int, {nullable:false})
    customFields!: number;

    @Field(() => Int, {nullable:false})
    languageCode!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

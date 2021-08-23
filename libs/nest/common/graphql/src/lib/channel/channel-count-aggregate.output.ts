import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChannelCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    token!: number;

    @Field(() => Int, {nullable:false})
    defaultLanguageCode!: number;

    @Field(() => Int, {nullable:false})
    currencyCode!: number;

    @Field(() => Int, {nullable:false})
    priceIncludeTax!: number;

    @Field(() => Int, {nullable:false})
    customFields!: number;

    @Field(() => Int, {nullable:false})
    productVariantId!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { Int } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';

@ObjectType()
export class ProductVariantMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    sku?: string;

    @Field(() => String, {nullable:true})
    brands?: string;

    @Field(() => CurrencyCode, {nullable:true})
    currencyCode?: keyof typeof CurrencyCode;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    sale?: number;

    @Field(() => Int, {nullable:true})
    stock?: number;

    @Field(() => Int, {nullable:true})
    sold?: number;

    @Field(() => Boolean, {nullable:true})
    draft?: boolean;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;
}

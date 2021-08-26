import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProductVariant } from '../product-variant/product-variant.model';
import { Role } from '../role/role.model';

/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
/** 渠道端 比如微信端、英文网站、中文网站等 */
@ObjectType({description:'渠道端 比如微信端、英文网站、中文网站等'})
export class Channel {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => LanguageCode, {nullable:false})
    defaultLanguageCode!: keyof typeof LanguageCode;
    @Field(() => CurrencyCode, {nullable:false})
    currencyCode!: keyof typeof CurrencyCode;
    @Field(() => Boolean, {nullable:true,defaultValue:true})
    priceIncludeTax!: boolean | null;
    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;
    @Field(() => ProductVariant, {nullable:true})
    productVariant?: ProductVariant;
    @Field(() => String, {nullable:true})
    productVariantId!: string | null;
    @Field(() => Role, {nullable:true})
    Role?: Role;
    @Field(() => String, {nullable:true})
    roleId!: string | null;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CurrencyCode } from '../prisma/currency-code.enum';

@ObjectType()
export class ChannelMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => LanguageCode, {nullable:true})
    defaultLanguageCode?: keyof typeof LanguageCode;

    @Field(() => CurrencyCode, {nullable:true})
    currencyCode?: keyof typeof CurrencyCode;

    @Field(() => Boolean, {nullable:true})
    priceIncludeTax?: boolean;

    @Field(() => String, {nullable:true})
    productVariantId?: string;

    @Field(() => String, {nullable:true})
    roleId?: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { LanguageCode } from '../prisma/language-code.enum';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ChannelUncheckedCreateWithoutProductVariantInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.Length(2, 5)
    code!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => LanguageCode, {nullable:true})
    defaultLanguageCode?: keyof typeof LanguageCode;

    @Field(() => CurrencyCode, {nullable:true})
    currencyCode?: keyof typeof CurrencyCode;

    @Field(() => Boolean, {nullable:true})
    priceIncludeTax?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => String, {nullable:true})
    roleId?: string;
}

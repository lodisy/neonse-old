import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { EnumCurrencyCodeFieldUpdateOperationsInput } from '../prisma/enum-currency-code-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import * as Validator from 'class-validator';
import { ProductVariantUpdateOneWithoutChannelsInput } from '../product-variant/product-variant-update-one-without-channels.input';
import { RoleUpdateOneWithoutChannelsInput } from '../role/role-update-one-without-channels.input';

@InputType()
export class ChannelUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    defaultLanguageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => EnumCurrencyCodeFieldUpdateOperationsInput, {nullable:true})
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    priceIncludeTax?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => ProductVariantUpdateOneWithoutChannelsInput, {nullable:true})
    productVariant?: ProductVariantUpdateOneWithoutChannelsInput;

    @Field(() => RoleUpdateOneWithoutChannelsInput, {nullable:true})
    Role?: RoleUpdateOneWithoutChannelsInput;
}

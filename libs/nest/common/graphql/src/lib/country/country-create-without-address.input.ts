import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CountryTranslationCreateNestedManyWithoutCountryInput } from '../country-translation/country-translation-create-nested-many-without-country.input';
import { ShippingZoneCreateNestedOneWithoutMembersInput } from '../shipping-zone/shipping-zone-create-nested-one-without-members.input';

@InputType()
export class CountryCreateWithoutAddressInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => CountryTranslationCreateNestedManyWithoutCountryInput, {nullable:true})
    translations?: CountryTranslationCreateNestedManyWithoutCountryInput;

    @Field(() => ShippingZoneCreateNestedOneWithoutMembersInput, {nullable:true})
    shippingZone?: ShippingZoneCreateNestedOneWithoutMembersInput;
}

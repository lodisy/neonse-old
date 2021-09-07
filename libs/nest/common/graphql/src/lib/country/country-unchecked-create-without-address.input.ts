import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CountryTranslationUncheckedCreateNestedManyWithoutCountryInput } from '../country-translation/country-translation-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateWithoutAddressInput {

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

    @Field(() => String, {nullable:true})
    shippingZoneId?: string;

    @Field(() => CountryTranslationUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    translations?: CountryTranslationUncheckedCreateNestedManyWithoutCountryInput;
}

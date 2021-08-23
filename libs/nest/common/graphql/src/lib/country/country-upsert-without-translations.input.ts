import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutTranslationsInput } from './country-update-without-translations.input';
import { CountryCreateWithoutTranslationsInput } from './country-create-without-translations.input';

@InputType()
export class CountryUpsertWithoutTranslationsInput {

    @Field(() => CountryUpdateWithoutTranslationsInput, {nullable:false})
    update!: CountryUpdateWithoutTranslationsInput;

    @Field(() => CountryCreateWithoutTranslationsInput, {nullable:false})
    create!: CountryCreateWithoutTranslationsInput;
}

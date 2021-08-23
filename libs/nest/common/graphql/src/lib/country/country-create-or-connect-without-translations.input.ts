import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryCreateWithoutTranslationsInput } from './country-create-without-translations.input';

@InputType()
export class CountryCreateOrConnectWithoutTranslationsInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;

    @Field(() => CountryCreateWithoutTranslationsInput, {nullable:false})
    create!: CountryCreateWithoutTranslationsInput;
}

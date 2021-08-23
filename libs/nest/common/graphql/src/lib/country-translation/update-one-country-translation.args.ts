import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationUpdateInput } from './country-translation-update.input';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';

@ArgsType()
export class UpdateOneCountryTranslationArgs {

    @Field(() => CountryTranslationUpdateInput, {nullable:false})
    data!: CountryTranslationUpdateInput;

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:false})
    where!: CountryTranslationWhereUniqueInput;
}

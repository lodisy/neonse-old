import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';
import { CountryTranslationCreateInput } from './country-translation-create.input';
import { CountryTranslationUpdateInput } from './country-translation-update.input';

@ArgsType()
export class UpsertOneCountryTranslationArgs {

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:false})
    where!: CountryTranslationWhereUniqueInput;

    @Field(() => CountryTranslationCreateInput, {nullable:false})
    create!: CountryTranslationCreateInput;

    @Field(() => CountryTranslationUpdateInput, {nullable:false})
    update!: CountryTranslationUpdateInput;
}

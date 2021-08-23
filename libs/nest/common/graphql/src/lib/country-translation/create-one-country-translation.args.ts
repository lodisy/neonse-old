import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationCreateInput } from './country-translation-create.input';

@ArgsType()
export class CreateOneCountryTranslationArgs {

    @Field(() => CountryTranslationCreateInput, {nullable:false})
    data!: CountryTranslationCreateInput;
}

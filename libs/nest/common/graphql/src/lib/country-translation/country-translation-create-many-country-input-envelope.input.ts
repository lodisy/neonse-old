import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationCreateManyCountryInput } from './country-translation-create-many-country.input';

@InputType()
export class CountryTranslationCreateManyCountryInputEnvelope {

    @Field(() => [CountryTranslationCreateManyCountryInput], {nullable:false})
    data!: Array<CountryTranslationCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

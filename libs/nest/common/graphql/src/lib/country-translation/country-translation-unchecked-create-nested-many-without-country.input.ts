import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationCreateWithoutCountryInput } from './country-translation-create-without-country.input';
import { CountryTranslationCreateOrConnectWithoutCountryInput } from './country-translation-create-or-connect-without-country.input';
import { CountryTranslationCreateManyCountryInputEnvelope } from './country-translation-create-many-country-input-envelope.input';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';

@InputType()
export class CountryTranslationUncheckedCreateNestedManyWithoutCountryInput {

    @Field(() => [CountryTranslationCreateWithoutCountryInput], {nullable:true})
    create?: Array<CountryTranslationCreateWithoutCountryInput>;

    @Field(() => [CountryTranslationCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<CountryTranslationCreateOrConnectWithoutCountryInput>;

    @Field(() => CountryTranslationCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: CountryTranslationCreateManyCountryInputEnvelope;

    @Field(() => [CountryTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<CountryTranslationWhereUniqueInput>;
}

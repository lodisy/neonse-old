import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationCreateWithoutCountryInput } from './country-translation-create-without-country.input';
import { CountryTranslationCreateOrConnectWithoutCountryInput } from './country-translation-create-or-connect-without-country.input';
import { CountryTranslationUpsertWithWhereUniqueWithoutCountryInput } from './country-translation-upsert-with-where-unique-without-country.input';
import { CountryTranslationCreateManyCountryInputEnvelope } from './country-translation-create-many-country-input-envelope.input';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';
import { CountryTranslationUpdateWithWhereUniqueWithoutCountryInput } from './country-translation-update-with-where-unique-without-country.input';
import { CountryTranslationUpdateManyWithWhereWithoutCountryInput } from './country-translation-update-many-with-where-without-country.input';
import { CountryTranslationScalarWhereInput } from './country-translation-scalar-where.input';

@InputType()
export class CountryTranslationUncheckedUpdateManyWithoutCountryInput {

    @Field(() => [CountryTranslationCreateWithoutCountryInput], {nullable:true})
    create?: Array<CountryTranslationCreateWithoutCountryInput>;

    @Field(() => [CountryTranslationCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<CountryTranslationCreateOrConnectWithoutCountryInput>;

    @Field(() => [CountryTranslationUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    upsert?: Array<CountryTranslationUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => CountryTranslationCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: CountryTranslationCreateManyCountryInputEnvelope;

    @Field(() => [CountryTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<CountryTranslationWhereUniqueInput>;

    @Field(() => [CountryTranslationWhereUniqueInput], {nullable:true})
    set?: Array<CountryTranslationWhereUniqueInput>;

    @Field(() => [CountryTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<CountryTranslationWhereUniqueInput>;

    @Field(() => [CountryTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<CountryTranslationWhereUniqueInput>;

    @Field(() => [CountryTranslationUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    update?: Array<CountryTranslationUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [CountryTranslationUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    updateMany?: Array<CountryTranslationUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [CountryTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<CountryTranslationScalarWhereInput>;
}

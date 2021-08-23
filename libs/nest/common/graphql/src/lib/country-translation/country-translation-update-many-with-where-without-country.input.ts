import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationScalarWhereInput } from './country-translation-scalar-where.input';
import { CountryTranslationUpdateManyMutationInput } from './country-translation-update-many-mutation.input';

@InputType()
export class CountryTranslationUpdateManyWithWhereWithoutCountryInput {

    @Field(() => CountryTranslationScalarWhereInput, {nullable:false})
    where!: CountryTranslationScalarWhereInput;

    @Field(() => CountryTranslationUpdateManyMutationInput, {nullable:false})
    data!: CountryTranslationUpdateManyMutationInput;
}

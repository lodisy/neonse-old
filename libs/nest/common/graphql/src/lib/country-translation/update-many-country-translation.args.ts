import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationUpdateManyMutationInput } from './country-translation-update-many-mutation.input';
import { CountryTranslationWhereInput } from './country-translation-where.input';

@ArgsType()
export class UpdateManyCountryTranslationArgs {

    @Field(() => CountryTranslationUpdateManyMutationInput, {nullable:false})
    data!: CountryTranslationUpdateManyMutationInput;

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    where?: CountryTranslationWhereInput;
}

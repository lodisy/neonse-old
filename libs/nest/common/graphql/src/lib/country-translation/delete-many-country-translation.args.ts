import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationWhereInput } from './country-translation-where.input';

@ArgsType()
export class DeleteManyCountryTranslationArgs {

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    where?: CountryTranslationWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationCreateManyInput } from './country-translation-create-many.input';

@ArgsType()
export class CreateManyCountryTranslationArgs {

    @Field(() => [CountryTranslationCreateManyInput], {nullable:false})
    data!: Array<CountryTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@ArgsType()
export class FindUniqueCountryArgs {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryUpdateInput } from './country-update.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@ArgsType()
export class UpdateOneCountryArgs {

    @Field(() => CountryUpdateInput, {nullable:false})
    data!: CountryUpdateInput;

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;
}

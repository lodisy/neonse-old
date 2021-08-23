import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryCreateInput } from './country-create.input';
import { CountryUpdateInput } from './country-update.input';

@ArgsType()
export class UpsertOneCountryArgs {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;

    @Field(() => CountryCreateInput, {nullable:false})
    create!: CountryCreateInput;

    @Field(() => CountryUpdateInput, {nullable:false})
    update!: CountryUpdateInput;
}

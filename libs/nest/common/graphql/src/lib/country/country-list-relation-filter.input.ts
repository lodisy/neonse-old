import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';

@InputType()
export class CountryListRelationFilter {

    @Field(() => CountryWhereInput, {nullable:true})
    every?: CountryWhereInput;

    @Field(() => CountryWhereInput, {nullable:true})
    some?: CountryWhereInput;

    @Field(() => CountryWhereInput, {nullable:true})
    none?: CountryWhereInput;
}

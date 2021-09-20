import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { CountryOrderByWithRelationInput } from './country-order-by-with-relation.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CountryScalarFieldEnum } from './country-scalar-field.enum';

@ArgsType()
export class FindFirstCountryArgs {

    @Field(() => CountryWhereInput, {nullable:true})
    where?: CountryWhereInput;

    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: CountryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CountryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { CountryOrderByInput } from './country-order-by.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CountryScalarFieldEnum } from './country-scalar-field.enum';

@ArgsType()
export class FindManyCountryArgs {

    @Field(() => CountryWhereInput, {nullable:true})
    where?: CountryWhereInput;

    @Field(() => [CountryOrderByInput], {nullable:true})
    orderBy?: Array<CountryOrderByInput>;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: CountryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CountryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryScalarFieldEnum>;
}

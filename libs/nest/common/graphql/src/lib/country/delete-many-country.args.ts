import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';

@ArgsType()
export class DeleteManyCountryArgs {

    @Field(() => CountryWhereInput, {nullable:true})
    where?: CountryWhereInput;
}

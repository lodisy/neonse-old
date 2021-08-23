import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryCreateInput } from './country-create.input';

@ArgsType()
export class CreateOneCountryArgs {

    @Field(() => CountryCreateInput, {nullable:false})
    data!: CountryCreateInput;
}

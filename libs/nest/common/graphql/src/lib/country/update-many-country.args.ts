import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryUpdateManyMutationInput } from './country-update-many-mutation.input';
import { CountryWhereInput } from './country-where.input';

@ArgsType()
export class UpdateManyCountryArgs {

    @Field(() => CountryUpdateManyMutationInput, {nullable:false})
    data!: CountryUpdateManyMutationInput;

    @Field(() => CountryWhereInput, {nullable:true})
    where?: CountryWhereInput;
}

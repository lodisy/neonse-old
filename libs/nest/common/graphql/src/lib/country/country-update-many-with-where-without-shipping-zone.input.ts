import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryScalarWhereInput } from './country-scalar-where.input';
import { CountryUpdateManyMutationInput } from './country-update-many-mutation.input';

@InputType()
export class CountryUpdateManyWithWhereWithoutShippingZoneInput {

    @Field(() => CountryScalarWhereInput, {nullable:false})
    where!: CountryScalarWhereInput;

    @Field(() => CountryUpdateManyMutationInput, {nullable:false})
    data!: CountryUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressScalarWhereInput } from './address-scalar-where.input';
import { AddressUpdateManyMutationInput } from './address-update-many-mutation.input';

@InputType()
export class AddressUpdateManyWithWhereWithoutCountryInput {

    @Field(() => AddressScalarWhereInput, {nullable:false})
    where!: AddressScalarWhereInput;

    @Field(() => AddressUpdateManyMutationInput, {nullable:false})
    data!: AddressUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithoutCountryInput } from './address-update-without-country.input';

@InputType()
export class AddressUpdateWithWhereUniqueWithoutCountryInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;

    @Field(() => AddressUpdateWithoutCountryInput, {nullable:false})
    data!: AddressUpdateWithoutCountryInput;
}

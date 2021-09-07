import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCreateWithoutCountryInput } from './address-create-without-country.input';

@InputType()
export class AddressCreateOrConnectWithoutCountryInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;

    @Field(() => AddressCreateWithoutCountryInput, {nullable:false})
    create!: AddressCreateWithoutCountryInput;
}

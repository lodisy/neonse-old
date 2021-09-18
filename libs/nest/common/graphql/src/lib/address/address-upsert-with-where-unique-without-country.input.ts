import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithoutCountryInput } from './address-update-without-country.input';
import { AddressCreateWithoutCountryInput } from './address-create-without-country.input';

@InputType()
export class AddressUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;

    @Field(() => AddressUpdateWithoutCountryInput, {nullable:false})
    update!: AddressUpdateWithoutCountryInput;

    @Field(() => AddressCreateWithoutCountryInput, {nullable:false})
    create!: AddressCreateWithoutCountryInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutAddressInput } from './country-update-without-address.input';
import { CountryCreateWithoutAddressInput } from './country-create-without-address.input';

@InputType()
export class CountryUpsertWithoutAddressInput {

    @Field(() => CountryUpdateWithoutAddressInput, {nullable:false})
    update!: CountryUpdateWithoutAddressInput;

    @Field(() => CountryCreateWithoutAddressInput, {nullable:false})
    create!: CountryCreateWithoutAddressInput;
}

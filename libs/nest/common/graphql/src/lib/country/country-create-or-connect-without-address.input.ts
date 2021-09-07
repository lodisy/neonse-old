import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryCreateWithoutAddressInput } from './country-create-without-address.input';

@InputType()
export class CountryCreateOrConnectWithoutAddressInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;

    @Field(() => CountryCreateWithoutAddressInput, {nullable:false})
    create!: CountryCreateWithoutAddressInput;
}

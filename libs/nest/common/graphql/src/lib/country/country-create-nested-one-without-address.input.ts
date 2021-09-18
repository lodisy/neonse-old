import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutAddressInput } from './country-create-without-address.input';
import { CountryCreateOrConnectWithoutAddressInput } from './country-create-or-connect-without-address.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutAddressInput {

    @Field(() => CountryCreateWithoutAddressInput, {nullable:true})
    create?: CountryCreateWithoutAddressInput;

    @Field(() => CountryCreateOrConnectWithoutAddressInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutAddressInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;
}

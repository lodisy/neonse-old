import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutAddressInput } from './country-create-without-address.input';
import { CountryCreateOrConnectWithoutAddressInput } from './country-create-or-connect-without-address.input';
import { CountryUpsertWithoutAddressInput } from './country-upsert-without-address.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateWithoutAddressInput } from './country-update-without-address.input';

@InputType()
export class CountryUpdateOneRequiredWithoutAddressInput {

    @Field(() => CountryCreateWithoutAddressInput, {nullable:true})
    create?: CountryCreateWithoutAddressInput;

    @Field(() => CountryCreateOrConnectWithoutAddressInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutAddressInput;

    @Field(() => CountryUpsertWithoutAddressInput, {nullable:true})
    upsert?: CountryUpsertWithoutAddressInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;

    @Field(() => CountryUpdateWithoutAddressInput, {nullable:true})
    update?: CountryUpdateWithoutAddressInput;
}

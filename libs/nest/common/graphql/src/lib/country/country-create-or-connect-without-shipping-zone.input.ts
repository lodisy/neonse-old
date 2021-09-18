import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryCreateWithoutShippingZoneInput } from './country-create-without-shipping-zone.input';

@InputType()
export class CountryCreateOrConnectWithoutShippingZoneInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;

    @Field(() => CountryCreateWithoutShippingZoneInput, {nullable:false})
    create!: CountryCreateWithoutShippingZoneInput;
}

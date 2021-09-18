import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateWithoutShippingZoneInput } from './country-update-without-shipping-zone.input';
import { CountryCreateWithoutShippingZoneInput } from './country-create-without-shipping-zone.input';

@InputType()
export class CountryUpsertWithWhereUniqueWithoutShippingZoneInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;

    @Field(() => CountryUpdateWithoutShippingZoneInput, {nullable:false})
    update!: CountryUpdateWithoutShippingZoneInput;

    @Field(() => CountryCreateWithoutShippingZoneInput, {nullable:false})
    create!: CountryCreateWithoutShippingZoneInput;
}

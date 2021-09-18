import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutShippingZoneInput } from './country-create-without-shipping-zone.input';
import { CountryCreateOrConnectWithoutShippingZoneInput } from './country-create-or-connect-without-shipping-zone.input';
import { CountryCreateManyShippingZoneInputEnvelope } from './country-create-many-shipping-zone-input-envelope.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryUncheckedCreateNestedManyWithoutShippingZoneInput {

    @Field(() => [CountryCreateWithoutShippingZoneInput], {nullable:true})
    create?: Array<CountryCreateWithoutShippingZoneInput>;

    @Field(() => [CountryCreateOrConnectWithoutShippingZoneInput], {nullable:true})
    connectOrCreate?: Array<CountryCreateOrConnectWithoutShippingZoneInput>;

    @Field(() => CountryCreateManyShippingZoneInputEnvelope, {nullable:true})
    createMany?: CountryCreateManyShippingZoneInputEnvelope;

    @Field(() => [CountryWhereUniqueInput], {nullable:true})
    connect?: Array<CountryWhereUniqueInput>;
}

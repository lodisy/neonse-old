import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutShippingZoneInput } from './country-create-without-shipping-zone.input';
import { CountryCreateOrConnectWithoutShippingZoneInput } from './country-create-or-connect-without-shipping-zone.input';
import { CountryUpsertWithWhereUniqueWithoutShippingZoneInput } from './country-upsert-with-where-unique-without-shipping-zone.input';
import { CountryCreateManyShippingZoneInputEnvelope } from './country-create-many-shipping-zone-input-envelope.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateWithWhereUniqueWithoutShippingZoneInput } from './country-update-with-where-unique-without-shipping-zone.input';
import { CountryUpdateManyWithWhereWithoutShippingZoneInput } from './country-update-many-with-where-without-shipping-zone.input';
import { CountryScalarWhereInput } from './country-scalar-where.input';

@InputType()
export class CountryUpdateManyWithoutShippingZoneInput {

    @Field(() => [CountryCreateWithoutShippingZoneInput], {nullable:true})
    create?: Array<CountryCreateWithoutShippingZoneInput>;

    @Field(() => [CountryCreateOrConnectWithoutShippingZoneInput], {nullable:true})
    connectOrCreate?: Array<CountryCreateOrConnectWithoutShippingZoneInput>;

    @Field(() => [CountryUpsertWithWhereUniqueWithoutShippingZoneInput], {nullable:true})
    upsert?: Array<CountryUpsertWithWhereUniqueWithoutShippingZoneInput>;

    @Field(() => CountryCreateManyShippingZoneInputEnvelope, {nullable:true})
    createMany?: CountryCreateManyShippingZoneInputEnvelope;

    @Field(() => [CountryWhereUniqueInput], {nullable:true})
    connect?: Array<CountryWhereUniqueInput>;

    @Field(() => [CountryWhereUniqueInput], {nullable:true})
    set?: Array<CountryWhereUniqueInput>;

    @Field(() => [CountryWhereUniqueInput], {nullable:true})
    disconnect?: Array<CountryWhereUniqueInput>;

    @Field(() => [CountryWhereUniqueInput], {nullable:true})
    delete?: Array<CountryWhereUniqueInput>;

    @Field(() => [CountryUpdateWithWhereUniqueWithoutShippingZoneInput], {nullable:true})
    update?: Array<CountryUpdateWithWhereUniqueWithoutShippingZoneInput>;

    @Field(() => [CountryUpdateManyWithWhereWithoutShippingZoneInput], {nullable:true})
    updateMany?: Array<CountryUpdateManyWithWhereWithoutShippingZoneInput>;

    @Field(() => [CountryScalarWhereInput], {nullable:true})
    deleteMany?: Array<CountryScalarWhereInput>;
}

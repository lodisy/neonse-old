import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateManyShippingZoneInput } from './country-create-many-shipping-zone.input';

@InputType()
export class CountryCreateManyShippingZoneInputEnvelope {

    @Field(() => [CountryCreateManyShippingZoneInput], {nullable:false})
    data!: Array<CountryCreateManyShippingZoneInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

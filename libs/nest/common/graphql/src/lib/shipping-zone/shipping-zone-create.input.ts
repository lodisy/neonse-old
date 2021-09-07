import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateNestedManyWithoutShippingZoneInput } from '../country/country-create-nested-many-without-shipping-zone.input';

@InputType()
export class ShippingZoneCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CountryCreateNestedManyWithoutShippingZoneInput, {nullable:true})
    members?: CountryCreateNestedManyWithoutShippingZoneInput;
}

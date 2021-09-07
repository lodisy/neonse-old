import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUncheckedCreateNestedManyWithoutShippingZoneInput } from '../country/country-unchecked-create-nested-many-without-shipping-zone.input';

@InputType()
export class ShippingZoneUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CountryUncheckedCreateNestedManyWithoutShippingZoneInput, {nullable:true})
    members?: CountryUncheckedCreateNestedManyWithoutShippingZoneInput;
}

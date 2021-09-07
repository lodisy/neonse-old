import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingZoneUpdateWithoutMembersInput } from './shipping-zone-update-without-members.input';
import { ShippingZoneCreateWithoutMembersInput } from './shipping-zone-create-without-members.input';

@InputType()
export class ShippingZoneUpsertWithoutMembersInput {

    @Field(() => ShippingZoneUpdateWithoutMembersInput, {nullable:false})
    update!: ShippingZoneUpdateWithoutMembersInput;

    @Field(() => ShippingZoneCreateWithoutMembersInput, {nullable:false})
    create!: ShippingZoneCreateWithoutMembersInput;
}

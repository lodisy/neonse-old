import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';
import { ShippingZoneCreateWithoutMembersInput } from './shipping-zone-create-without-members.input';

@InputType()
export class ShippingZoneCreateOrConnectWithoutMembersInput {

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:false})
    where!: ShippingZoneWhereUniqueInput;

    @Field(() => ShippingZoneCreateWithoutMembersInput, {nullable:false})
    create!: ShippingZoneCreateWithoutMembersInput;
}

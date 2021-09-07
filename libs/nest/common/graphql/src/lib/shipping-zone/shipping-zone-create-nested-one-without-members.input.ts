import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingZoneCreateWithoutMembersInput } from './shipping-zone-create-without-members.input';
import { ShippingZoneCreateOrConnectWithoutMembersInput } from './shipping-zone-create-or-connect-without-members.input';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';

@InputType()
export class ShippingZoneCreateNestedOneWithoutMembersInput {

    @Field(() => ShippingZoneCreateWithoutMembersInput, {nullable:true})
    create?: ShippingZoneCreateWithoutMembersInput;

    @Field(() => ShippingZoneCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ShippingZoneCreateOrConnectWithoutMembersInput;

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:true})
    connect?: ShippingZoneWhereUniqueInput;
}

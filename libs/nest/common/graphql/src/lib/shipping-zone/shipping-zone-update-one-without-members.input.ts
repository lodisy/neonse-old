import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingZoneCreateWithoutMembersInput } from './shipping-zone-create-without-members.input';
import { ShippingZoneCreateOrConnectWithoutMembersInput } from './shipping-zone-create-or-connect-without-members.input';
import { ShippingZoneUpsertWithoutMembersInput } from './shipping-zone-upsert-without-members.input';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';
import { ShippingZoneUpdateWithoutMembersInput } from './shipping-zone-update-without-members.input';

@InputType()
export class ShippingZoneUpdateOneWithoutMembersInput {

    @Field(() => ShippingZoneCreateWithoutMembersInput, {nullable:true})
    create?: ShippingZoneCreateWithoutMembersInput;

    @Field(() => ShippingZoneCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ShippingZoneCreateOrConnectWithoutMembersInput;

    @Field(() => ShippingZoneUpsertWithoutMembersInput, {nullable:true})
    upsert?: ShippingZoneUpsertWithoutMembersInput;

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:true})
    connect?: ShippingZoneWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ShippingZoneUpdateWithoutMembersInput, {nullable:true})
    update?: ShippingZoneUpdateWithoutMembersInput;
}

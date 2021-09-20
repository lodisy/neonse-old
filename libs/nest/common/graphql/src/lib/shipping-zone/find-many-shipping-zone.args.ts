import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneWhereInput } from './shipping-zone-where.input';
import { ShippingZoneOrderByWithRelationInput } from './shipping-zone-order-by-with-relation.input';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingZoneScalarFieldEnum } from './shipping-zone-scalar-field.enum';

@ArgsType()
export class FindManyShippingZoneArgs {

    @Field(() => ShippingZoneWhereInput, {nullable:true})
    where?: ShippingZoneWhereInput;

    @Field(() => [ShippingZoneOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShippingZoneOrderByWithRelationInput>;

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:true})
    cursor?: ShippingZoneWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShippingZoneScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShippingZoneScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Country } from '../country/country.model';
import { ShippingZoneCount } from './shipping-zone-count.output';

@ObjectType()
export class ShippingZone {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Country], {nullable:true})
    members?: Array<Country>;

    @Field(() => ShippingZoneCount, {nullable:true})
    _count?: ShippingZoneCount;
}

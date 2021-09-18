import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CountryListRelationFilter } from '../country/country-list-relation-filter.input';

@InputType()
export class ShippingZoneWhereInput {

    @Field(() => [ShippingZoneWhereInput], {nullable:true})
    AND?: Array<ShippingZoneWhereInput>;

    @Field(() => [ShippingZoneWhereInput], {nullable:true})
    OR?: Array<ShippingZoneWhereInput>;

    @Field(() => [ShippingZoneWhereInput], {nullable:true})
    NOT?: Array<ShippingZoneWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CountryListRelationFilter, {nullable:true})
    members?: CountryListRelationFilter;
}

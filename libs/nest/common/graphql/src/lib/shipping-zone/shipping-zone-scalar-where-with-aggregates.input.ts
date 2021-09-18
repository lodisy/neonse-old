import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ShippingZoneScalarWhereWithAggregatesInput {

    @Field(() => [ShippingZoneScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShippingZoneScalarWhereWithAggregatesInput>;

    @Field(() => [ShippingZoneScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShippingZoneScalarWhereWithAggregatesInput>;

    @Field(() => [ShippingZoneScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShippingZoneScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class PromotionScalarWhereInput {

    @Field(() => [PromotionScalarWhereInput], {nullable:true})
    AND?: Array<PromotionScalarWhereInput>;

    @Field(() => [PromotionScalarWhereInput], {nullable:true})
    OR?: Array<PromotionScalarWhereInput>;

    @Field(() => [PromotionScalarWhereInput], {nullable:true})
    NOT?: Array<PromotionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    couponCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    perCustomerUsageLimit?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    promotionListId?: StringFilter;
}

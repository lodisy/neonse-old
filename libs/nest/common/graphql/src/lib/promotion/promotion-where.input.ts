import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { PromotionListRelationFilter } from './promotion-list-relation-filter.input';

@InputType()
export class PromotionWhereInput {

    @Field(() => [PromotionWhereInput], {nullable:true})
    AND?: Array<PromotionWhereInput>;

    @Field(() => [PromotionWhereInput], {nullable:true})
    OR?: Array<PromotionWhereInput>;

    @Field(() => [PromotionWhereInput], {nullable:true})
    NOT?: Array<PromotionWhereInput>;

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

    @Field(() => PromotionListRelationFilter, {nullable:true})
    promotionList?: PromotionListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    promotionListId?: StringFilter;
}

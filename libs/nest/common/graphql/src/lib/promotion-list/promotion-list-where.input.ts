import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PromotionListRelationFilter } from '../promotion/promotion-list-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PromotionListWhereInput {

    @Field(() => [PromotionListWhereInput], {nullable:true})
    AND?: Array<PromotionListWhereInput>;

    @Field(() => [PromotionListWhereInput], {nullable:true})
    OR?: Array<PromotionListWhereInput>;

    @Field(() => [PromotionListWhereInput], {nullable:true})
    NOT?: Array<PromotionListWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => PromotionListRelationFilter, {nullable:true})
    items?: PromotionListRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    total?: IntFilter;
}

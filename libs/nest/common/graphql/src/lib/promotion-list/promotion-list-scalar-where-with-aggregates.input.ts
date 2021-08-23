import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PromotionListScalarWhereWithAggregatesInput {

    @Field(() => [PromotionListScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PromotionListScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionListScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PromotionListScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionListScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PromotionListScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    total?: IntWithAggregatesFilter;
}

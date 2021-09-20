import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleTranslationCountOrderByAggregateInput } from './role-translation-count-order-by-aggregate.input';
import { RoleTranslationMaxOrderByAggregateInput } from './role-translation-max-order-by-aggregate.input';
import { RoleTranslationMinOrderByAggregateInput } from './role-translation-min-order-by-aggregate.input';

@InputType()
export class RoleTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => RoleTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: RoleTranslationCountOrderByAggregateInput;

    @Field(() => RoleTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: RoleTranslationMaxOrderByAggregateInput;

    @Field(() => RoleTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: RoleTranslationMinOrderByAggregateInput;
}

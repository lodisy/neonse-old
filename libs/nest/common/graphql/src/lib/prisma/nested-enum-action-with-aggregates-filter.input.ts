import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Action } from './action.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumActionFilter } from './nested-enum-action-filter.input';

@InputType()
export class NestedEnumActionWithAggregatesFilter {

    @Field(() => Action, {nullable:true})
    equals?: keyof typeof Action;

    @Field(() => [Action], {nullable:true})
    in?: Array<keyof typeof Action>;

    @Field(() => [Action], {nullable:true})
    notIn?: Array<keyof typeof Action>;

    @Field(() => NestedEnumActionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    count?: NestedIntFilter;

    @Field(() => NestedEnumActionFilter, {nullable:true})
    _min?: NestedEnumActionFilter;

    @Field(() => NestedEnumActionFilter, {nullable:true})
    min?: NestedEnumActionFilter;

    @Field(() => NestedEnumActionFilter, {nullable:true})
    _max?: NestedEnumActionFilter;

    @Field(() => NestedEnumActionFilter, {nullable:true})
    max?: NestedEnumActionFilter;
}

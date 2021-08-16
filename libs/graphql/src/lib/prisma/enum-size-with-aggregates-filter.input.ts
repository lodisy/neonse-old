import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Size } from './size.enum';
import { NestedEnumSizeWithAggregatesFilter } from './nested-enum-size-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSizeFilter } from './nested-enum-size-filter.input';

@InputType()
export class EnumSizeWithAggregatesFilter {

    @Field(() => Size, {nullable:true})
    equals?: keyof typeof Size;

    @Field(() => [Size], {nullable:true})
    in?: Array<keyof typeof Size>;

    @Field(() => [Size], {nullable:true})
    notIn?: Array<keyof typeof Size>;

    @Field(() => NestedEnumSizeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSizeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    count?: NestedIntFilter;

    @Field(() => NestedEnumSizeFilter, {nullable:true})
    _min?: NestedEnumSizeFilter;

    @Field(() => NestedEnumSizeFilter, {nullable:true})
    min?: NestedEnumSizeFilter;

    @Field(() => NestedEnumSizeFilter, {nullable:true})
    _max?: NestedEnumSizeFilter;

    @Field(() => NestedEnumSizeFilter, {nullable:true})
    max?: NestedEnumSizeFilter;
}

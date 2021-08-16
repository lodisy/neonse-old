import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentType } from './content-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumContentTypeFilter } from './nested-enum-content-type-filter.input';

@InputType()
export class NestedEnumContentTypeWithAggregatesFilter {

    @Field(() => ContentType, {nullable:true})
    equals?: keyof typeof ContentType;

    @Field(() => [ContentType], {nullable:true})
    in?: Array<keyof typeof ContentType>;

    @Field(() => [ContentType], {nullable:true})
    notIn?: Array<keyof typeof ContentType>;

    @Field(() => NestedEnumContentTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumContentTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    count?: NestedIntFilter;

    @Field(() => NestedEnumContentTypeFilter, {nullable:true})
    _min?: NestedEnumContentTypeFilter;

    @Field(() => NestedEnumContentTypeFilter, {nullable:true})
    min?: NestedEnumContentTypeFilter;

    @Field(() => NestedEnumContentTypeFilter, {nullable:true})
    _max?: NestedEnumContentTypeFilter;

    @Field(() => NestedEnumContentTypeFilter, {nullable:true})
    max?: NestedEnumContentTypeFilter;
}

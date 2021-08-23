import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedBytesFilter } from './nested-bytes-filter.input';

@InputType()
export class NestedBytesWithAggregatesFilter {

    @Field(() => String, {nullable:true})
    equals?: Buffer;

    @Field(() => NestedBytesWithAggregatesFilter, {nullable:true})
    not?: NestedBytesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    count?: NestedIntFilter;

    @Field(() => NestedBytesFilter, {nullable:true})
    _min?: NestedBytesFilter;

    @Field(() => NestedBytesFilter, {nullable:true})
    min?: NestedBytesFilter;

    @Field(() => NestedBytesFilter, {nullable:true})
    _max?: NestedBytesFilter;

    @Field(() => NestedBytesFilter, {nullable:true})
    max?: NestedBytesFilter;
}

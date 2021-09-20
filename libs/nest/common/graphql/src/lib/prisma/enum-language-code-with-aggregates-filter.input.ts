import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from './language-code.enum';
import { NestedEnumLanguageCodeWithAggregatesFilter } from './nested-enum-language-code-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLanguageCodeFilter } from './nested-enum-language-code-filter.input';

@InputType()
export class EnumLanguageCodeWithAggregatesFilter {

    @Field(() => LanguageCode, {nullable:true})
    equals?: keyof typeof LanguageCode;

    @Field(() => [LanguageCode], {nullable:true})
    in?: Array<keyof typeof LanguageCode>;

    @Field(() => [LanguageCode], {nullable:true})
    notIn?: Array<keyof typeof LanguageCode>;

    @Field(() => NestedEnumLanguageCodeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLanguageCodeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLanguageCodeFilter, {nullable:true})
    _min?: NestedEnumLanguageCodeFilter;

    @Field(() => NestedEnumLanguageCodeFilter, {nullable:true})
    _max?: NestedEnumLanguageCodeFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ShippingMethodTranslationScalarWhereWithAggregatesInput {

    @Field(() => [ShippingMethodTranslationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShippingMethodTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ShippingMethodTranslationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShippingMethodTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ShippingMethodTranslationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShippingMethodTranslationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    shippingMethodId?: StringWithAggregatesFilter;
}

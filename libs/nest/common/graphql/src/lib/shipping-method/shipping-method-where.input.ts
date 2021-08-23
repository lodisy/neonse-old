import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ShippingMethodTranslationListRelationFilter } from '../shipping-method-translation/shipping-method-translation-list-relation-filter.input';

@InputType()
export class ShippingMethodWhereInput {

    @Field(() => [ShippingMethodWhereInput], {nullable:true})
    AND?: Array<ShippingMethodWhereInput>;

    @Field(() => [ShippingMethodWhereInput], {nullable:true})
    OR?: Array<ShippingMethodWhereInput>;

    @Field(() => [ShippingMethodWhereInput], {nullable:true})
    NOT?: Array<ShippingMethodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => ShippingMethodTranslationListRelationFilter, {nullable:true})
    translations?: ShippingMethodTranslationListRelationFilter;
}

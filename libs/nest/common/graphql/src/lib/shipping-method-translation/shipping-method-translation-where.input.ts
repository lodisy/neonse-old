import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ShippingMethodRelationFilter } from '../shipping-method/shipping-method-relation-filter.input';

@InputType()
export class ShippingMethodTranslationWhereInput {

    @Field(() => [ShippingMethodTranslationWhereInput], {nullable:true})
    AND?: Array<ShippingMethodTranslationWhereInput>;

    @Field(() => [ShippingMethodTranslationWhereInput], {nullable:true})
    OR?: Array<ShippingMethodTranslationWhereInput>;

    @Field(() => [ShippingMethodTranslationWhereInput], {nullable:true})
    NOT?: Array<ShippingMethodTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => ShippingMethodRelationFilter, {nullable:true})
    shippingMethod?: ShippingMethodRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    shippingMethodId?: StringFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ShippingMethodTranslationScalarWhereInput {

    @Field(() => [ShippingMethodTranslationScalarWhereInput], {nullable:true})
    AND?: Array<ShippingMethodTranslationScalarWhereInput>;

    @Field(() => [ShippingMethodTranslationScalarWhereInput], {nullable:true})
    OR?: Array<ShippingMethodTranslationScalarWhereInput>;

    @Field(() => [ShippingMethodTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<ShippingMethodTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    shippingMethodId?: StringFilter;
}

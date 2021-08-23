import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductTypeRelationFilter } from '../product-type/product-type-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductTypeTranslationWhereInput {

    @Field(() => [ProductTypeTranslationWhereInput], {nullable:true})
    AND?: Array<ProductTypeTranslationWhereInput>;

    @Field(() => [ProductTypeTranslationWhereInput], {nullable:true})
    OR?: Array<ProductTypeTranslationWhereInput>;

    @Field(() => [ProductTypeTranslationWhereInput], {nullable:true})
    NOT?: Array<ProductTypeTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ProductTypeRelationFilter, {nullable:true})
    productType?: ProductTypeRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productTypeId?: StringNullableFilter;
}

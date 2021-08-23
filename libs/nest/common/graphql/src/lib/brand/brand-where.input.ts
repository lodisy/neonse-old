import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfileListRelationFilter } from '../profile/profile-list-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { BrandTranslationListRelationFilter } from '../brand-translation/brand-translation-list-relation-filter.input';

@InputType()
export class BrandWhereInput {

    @Field(() => [BrandWhereInput], {nullable:true})
    AND?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    OR?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    NOT?: Array<BrandWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => ProfileListRelationFilter, {nullable:true})
    founders?: ProfileListRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    year?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => BrandTranslationListRelationFilter, {nullable:true})
    translations?: BrandTranslationListRelationFilter;
}

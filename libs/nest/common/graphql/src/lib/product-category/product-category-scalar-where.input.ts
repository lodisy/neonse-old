import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';

@InputType()
export class ProductCategoryScalarWhereInput {

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;
}

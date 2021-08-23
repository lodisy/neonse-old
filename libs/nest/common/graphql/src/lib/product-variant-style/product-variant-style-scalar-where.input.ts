import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantStyleScalarWhereInput {

    @Field(() => [ProductVariantStyleScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantStyleScalarWhereInput>;

    @Field(() => [ProductVariantStyleScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantStyleScalarWhereInput>;

    @Field(() => [ProductVariantStyleScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantStyleScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fileId?: StringFilter;
}

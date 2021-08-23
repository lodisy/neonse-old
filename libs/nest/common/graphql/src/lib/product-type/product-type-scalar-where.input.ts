import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';

@InputType()
export class ProductTypeScalarWhereInput {

    @Field(() => [ProductTypeScalarWhereInput], {nullable:true})
    AND?: Array<ProductTypeScalarWhereInput>;

    @Field(() => [ProductTypeScalarWhereInput], {nullable:true})
    OR?: Array<ProductTypeScalarWhereInput>;

    @Field(() => [ProductTypeScalarWhereInput], {nullable:true})
    NOT?: Array<ProductTypeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;
}

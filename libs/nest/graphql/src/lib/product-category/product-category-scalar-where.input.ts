import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'

@InputType()
export class ProductCategoryScalarWhereInput {
    @Field(() => [ProductCategoryScalarWhereInput], { nullable: true })
    AND?: Array<ProductCategoryScalarWhereInput>

    @Field(() => [ProductCategoryScalarWhereInput], { nullable: true })
    OR?: Array<ProductCategoryScalarWhereInput>

    @Field(() => [ProductCategoryScalarWhereInput], { nullable: true })
    NOT?: Array<ProductCategoryScalarWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    slug?: StringFilter

    @Field(() => StringNullableFilter, { nullable: true })
    parentId?: StringNullableFilter
}

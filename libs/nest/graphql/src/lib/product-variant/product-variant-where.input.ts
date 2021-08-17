import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { ProductRelationFilter } from '../product/product-relation-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { HideField } from '@nestjs/graphql'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { EnumSizeFilter } from '../prisma/enum-size-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'

@InputType()
export class ProductVariantWhereInput {
    @Field(() => [ProductVariantWhereInput], { nullable: true })
    AND?: Array<ProductVariantWhereInput>

    @Field(() => [ProductVariantWhereInput], { nullable: true })
    OR?: Array<ProductVariantWhereInput>

    @Field(() => [ProductVariantWhereInput], { nullable: true })
    NOT?: Array<ProductVariantWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter

    @Field(() => ProductRelationFilter, { nullable: true })
    product?: ProductRelationFilter

    @Field(() => StringFilter, { nullable: true })
    productId?: StringFilter

    @Field(() => StringNullableFilter, { nullable: true })
    name?: StringNullableFilter

    @HideField()
    sku?: StringFilter

    @Field(() => StringNullableListFilter, { nullable: true })
    images?: StringNullableListFilter

    @Field(() => StringFilter, { nullable: true })
    brands?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    style?: StringFilter

    @Field(() => EnumSizeFilter, { nullable: true })
    size?: EnumSizeFilter

    @Field(() => IntFilter, { nullable: true })
    price?: IntFilter

    @Field(() => IntNullableFilter, { nullable: true })
    sale?: IntNullableFilter

    @Field(() => IntNullableFilter, { nullable: true })
    stock?: IntNullableFilter

    @Field(() => IntFilter, { nullable: true })
    sold?: IntFilter
}

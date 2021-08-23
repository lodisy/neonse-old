import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ProductVariantRelationFilter } from '../product-variant/product-variant-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantSizeWhereInput {

    @Field(() => [ProductVariantSizeWhereInput], {nullable:true})
    AND?: Array<ProductVariantSizeWhereInput>;

    @Field(() => [ProductVariantSizeWhereInput], {nullable:true})
    OR?: Array<ProductVariantSizeWhereInput>;

    @Field(() => [ProductVariantSizeWhereInput], {nullable:true})
    NOT?: Array<ProductVariantSizeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ProductVariantRelationFilter, {nullable:true})
    productVariant?: ProductVariantRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;
}

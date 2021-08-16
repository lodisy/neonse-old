import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ProductScalarWhereInput {

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sku?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    discription?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    featured?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    draft?: BoolNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    stock?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    sold?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}

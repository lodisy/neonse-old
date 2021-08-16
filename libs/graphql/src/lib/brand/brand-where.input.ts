import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileListRelationFilter } from '../profile/profile-list-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

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
}

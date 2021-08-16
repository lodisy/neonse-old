import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BrandScalarWhereInput {

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    AND?: Array<BrandScalarWhereInput>;

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    OR?: Array<BrandScalarWhereInput>;

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    NOT?: Array<BrandScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    year?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}

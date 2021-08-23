import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';

@InputType()
export class ReviewWhereInput {

    @Field(() => [ReviewWhereInput], {nullable:true})
    AND?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    OR?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    NOT?: Array<ReviewWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    by?: ProfileRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    rate?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    uploads?: FileListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumContentTypeFilter } from '../prisma/enum-content-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class LikeScalarWhereInput {

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    AND?: Array<LikeScalarWhereInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    OR?: Array<LikeScalarWhereInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    NOT?: Array<LikeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => EnumContentTypeFilter, {nullable:true})
    type?: EnumContentTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;
}

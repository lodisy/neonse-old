import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input'
import { EnumContentTypeFilter } from '../prisma/enum-content-type-filter.input'
import { ProductRelationFilter } from '../product/product-relation-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class LikeWhereInput {
    @Field(() => [LikeWhereInput], { nullable: true })
    AND?: Array<LikeWhereInput>

    @Field(() => [LikeWhereInput], { nullable: true })
    OR?: Array<LikeWhereInput>

    @Field(() => [LikeWhereInput], { nullable: true })
    NOT?: Array<LikeWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter

    @Field(() => ProfileRelationFilter, { nullable: true })
    by?: ProfileRelationFilter

    @Field(() => StringFilter, { nullable: true })
    profileId?: StringFilter

    @Field(() => EnumContentTypeFilter, { nullable: true })
    type?: EnumContentTypeFilter

    @Field(() => ProductRelationFilter, { nullable: true })
    product?: ProductRelationFilter

    @Field(() => StringNullableFilter, { nullable: true })
    productId?: StringNullableFilter

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: DateTimeFilter
}

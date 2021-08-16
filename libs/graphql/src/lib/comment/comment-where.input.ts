import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CommentWhereInput {

    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    by?: ProfileRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;
}

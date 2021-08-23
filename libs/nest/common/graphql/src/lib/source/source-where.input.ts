import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';

@InputType()
export class SourceWhereInput {

    @Field(() => [SourceWhereInput], {nullable:true})
    AND?: Array<SourceWhereInput>;

    @Field(() => [SourceWhereInput], {nullable:true})
    OR?: Array<SourceWhereInput>;

    @Field(() => [SourceWhereInput], {nullable:true})
    NOT?: Array<SourceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    link?: StringNullableFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    File?: FileListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';

/** 文章、图片、视频等来源 */
@ObjectType({description:'文章、图片、视频等来源'})
export class Source {

    @Field(() => ID, {nullable:false})
    id!: string;

    /** 作者、网站或杂志名称 */
    @Field(() => String, {nullable:false,description:'作者、网站或杂志名称'})
    name!: string;

    @Field(() => String, {nullable:true})
    link!: string | null;

    @Field(() => [File], {nullable:true})
    File?: Array<File>;
}

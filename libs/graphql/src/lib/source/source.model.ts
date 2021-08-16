import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';

@ObjectType()
export class Source {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    link!: string | null;

    @Field(() => File, {nullable:false})
    file?: File;

    @Field(() => String, {nullable:false})
    fileId!: string;
}

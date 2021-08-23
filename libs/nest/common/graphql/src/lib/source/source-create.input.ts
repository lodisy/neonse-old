import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { FileCreateNestedManyWithoutSourceInput } from '../file/file-create-nested-many-without-source.input';

@InputType()
export class SourceCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    link?: string;

    @Field(() => FileCreateNestedManyWithoutSourceInput, {nullable:true})
    File?: FileCreateNestedManyWithoutSourceInput;
}

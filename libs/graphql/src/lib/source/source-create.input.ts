import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutSourceInput } from '../file/file-create-nested-one-without-source.input';

@InputType()
export class SourceCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => FileCreateNestedOneWithoutSourceInput, {nullable:false})
    file!: FileCreateNestedOneWithoutSourceInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { FileUncheckedCreateNestedManyWithoutSourceInput } from '../file/file-unchecked-create-nested-many-without-source.input';

@InputType()
export class SourceUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    link?: string;

    @Field(() => FileUncheckedCreateNestedManyWithoutSourceInput, {nullable:true})
    File?: FileUncheckedCreateNestedManyWithoutSourceInput;
}

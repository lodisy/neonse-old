import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SourceUpdateWithoutFileInput } from './source-update-without-file.input';
import { SourceCreateWithoutFileInput } from './source-create-without-file.input';

@InputType()
export class SourceUpsertWithoutFileInput {

    @Field(() => SourceUpdateWithoutFileInput, {nullable:false})
    update!: SourceUpdateWithoutFileInput;

    @Field(() => SourceCreateWithoutFileInput, {nullable:false})
    create!: SourceCreateWithoutFileInput;
}

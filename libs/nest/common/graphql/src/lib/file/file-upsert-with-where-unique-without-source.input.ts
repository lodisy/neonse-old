import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutSourceInput } from './file-update-without-source.input';
import { FileCreateWithoutSourceInput } from './file-create-without-source.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutSourceInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutSourceInput, {nullable:false})
    update!: FileUpdateWithoutSourceInput;

    @Field(() => FileCreateWithoutSourceInput, {nullable:false})
    create!: FileCreateWithoutSourceInput;
}

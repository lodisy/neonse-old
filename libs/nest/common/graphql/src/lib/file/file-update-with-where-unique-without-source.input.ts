import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutSourceInput } from './file-update-without-source.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutSourceInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutSourceInput, {nullable:false})
    data!: FileUpdateWithoutSourceInput;
}

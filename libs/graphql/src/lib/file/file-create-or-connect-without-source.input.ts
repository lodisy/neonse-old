import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutSourceInput } from './file-create-without-source.input';

@InputType()
export class FileCreateOrConnectWithoutSourceInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutSourceInput, {nullable:false})
    create!: FileCreateWithoutSourceInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutSourceInput } from './file-create-without-source.input';
import { FileCreateOrConnectWithoutSourceInput } from './file-create-or-connect-without-source.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutSourceInput {

    @Field(() => FileCreateWithoutSourceInput, {nullable:true})
    create?: FileCreateWithoutSourceInput;

    @Field(() => FileCreateOrConnectWithoutSourceInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutSourceInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}

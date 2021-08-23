import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutSourceInput } from './file-create-without-source.input';
import { FileCreateOrConnectWithoutSourceInput } from './file-create-or-connect-without-source.input';
import { FileCreateManySourceInputEnvelope } from './file-create-many-source-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutSourceInput {

    @Field(() => [FileCreateWithoutSourceInput], {nullable:true})
    create?: Array<FileCreateWithoutSourceInput>;

    @Field(() => [FileCreateOrConnectWithoutSourceInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutSourceInput>;

    @Field(() => FileCreateManySourceInputEnvelope, {nullable:true})
    createMany?: FileCreateManySourceInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;
}

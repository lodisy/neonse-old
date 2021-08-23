import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutSourceInput } from './file-create-without-source.input';
import { FileCreateOrConnectWithoutSourceInput } from './file-create-or-connect-without-source.input';
import { FileUpsertWithWhereUniqueWithoutSourceInput } from './file-upsert-with-where-unique-without-source.input';
import { FileCreateManySourceInputEnvelope } from './file-create-many-source-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutSourceInput } from './file-update-with-where-unique-without-source.input';
import { FileUpdateManyWithWhereWithoutSourceInput } from './file-update-many-with-where-without-source.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutSourceInput {

    @Field(() => [FileCreateWithoutSourceInput], {nullable:true})
    create?: Array<FileCreateWithoutSourceInput>;

    @Field(() => [FileCreateOrConnectWithoutSourceInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutSourceInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutSourceInput], {nullable:true})
    upsert?: Array<FileUpsertWithWhereUniqueWithoutSourceInput>;

    @Field(() => FileCreateManySourceInputEnvelope, {nullable:true})
    createMany?: FileCreateManySourceInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutSourceInput], {nullable:true})
    update?: Array<FileUpdateWithWhereUniqueWithoutSourceInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutSourceInput], {nullable:true})
    updateMany?: Array<FileUpdateManyWithWhereWithoutSourceInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    deleteMany?: Array<FileScalarWhereInput>;
}

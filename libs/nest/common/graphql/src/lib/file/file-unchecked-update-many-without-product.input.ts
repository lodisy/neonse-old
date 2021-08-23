import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutProductInput } from './file-create-without-product.input';
import { FileCreateOrConnectWithoutProductInput } from './file-create-or-connect-without-product.input';
import { FileUpsertWithWhereUniqueWithoutProductInput } from './file-upsert-with-where-unique-without-product.input';
import { FileCreateManyProductInputEnvelope } from './file-create-many-product-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutProductInput } from './file-update-with-where-unique-without-product.input';
import { FileUpdateManyWithWhereWithoutProductInput } from './file-update-many-with-where-without-product.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUncheckedUpdateManyWithoutProductInput {

    @Field(() => [FileCreateWithoutProductInput], {nullable:true})
    create?: Array<FileCreateWithoutProductInput>;

    @Field(() => [FileCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutProductInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<FileUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => FileCreateManyProductInputEnvelope, {nullable:true})
    createMany?: FileCreateManyProductInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<FileUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<FileUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    deleteMany?: Array<FileScalarWhereInput>;
}

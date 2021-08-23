import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutProductVariantInput } from './file-create-without-product-variant.input';
import { FileCreateOrConnectWithoutProductVariantInput } from './file-create-or-connect-without-product-variant.input';
import { FileUpsertWithWhereUniqueWithoutProductVariantInput } from './file-upsert-with-where-unique-without-product-variant.input';
import { FileCreateManyProductVariantInputEnvelope } from './file-create-many-product-variant-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutProductVariantInput } from './file-update-with-where-unique-without-product-variant.input';
import { FileUpdateManyWithWhereWithoutProductVariantInput } from './file-update-many-with-where-without-product-variant.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUncheckedUpdateManyWithoutProductVariantInput {

    @Field(() => [FileCreateWithoutProductVariantInput], {nullable:true})
    create?: Array<FileCreateWithoutProductVariantInput>;

    @Field(() => [FileCreateOrConnectWithoutProductVariantInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutProductVariantInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    upsert?: Array<FileUpsertWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => FileCreateManyProductVariantInputEnvelope, {nullable:true})
    createMany?: FileCreateManyProductVariantInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    update?: Array<FileUpdateWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutProductVariantInput], {nullable:true})
    updateMany?: Array<FileUpdateManyWithWhereWithoutProductVariantInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    deleteMany?: Array<FileScalarWhereInput>;
}

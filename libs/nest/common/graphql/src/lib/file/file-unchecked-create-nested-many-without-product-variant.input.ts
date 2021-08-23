import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutProductVariantInput } from './file-create-without-product-variant.input';
import { FileCreateOrConnectWithoutProductVariantInput } from './file-create-or-connect-without-product-variant.input';
import { FileCreateManyProductVariantInputEnvelope } from './file-create-many-product-variant-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutProductVariantInput {

    @Field(() => [FileCreateWithoutProductVariantInput], {nullable:true})
    create?: Array<FileCreateWithoutProductVariantInput>;

    @Field(() => [FileCreateOrConnectWithoutProductVariantInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutProductVariantInput>;

    @Field(() => FileCreateManyProductVariantInputEnvelope, {nullable:true})
    createMany?: FileCreateManyProductVariantInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutProductInput } from './file-create-without-product.input';
import { FileCreateOrConnectWithoutProductInput } from './file-create-or-connect-without-product.input';
import { FileCreateManyProductInputEnvelope } from './file-create-many-product-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutProductInput {

    @Field(() => [FileCreateWithoutProductInput], {nullable:true})
    create?: Array<FileCreateWithoutProductInput>;

    @Field(() => [FileCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutProductInput>;

    @Field(() => FileCreateManyProductInputEnvelope, {nullable:true})
    createMany?: FileCreateManyProductInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;
}

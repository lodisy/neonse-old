import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutProductVariantStyleInput } from './file-create-without-product-variant-style.input';
import { FileCreateOrConnectWithoutProductVariantStyleInput } from './file-create-or-connect-without-product-variant-style.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutProductVariantStyleInput {

    @Field(() => FileCreateWithoutProductVariantStyleInput, {nullable:true})
    create?: FileCreateWithoutProductVariantStyleInput;

    @Field(() => FileCreateOrConnectWithoutProductVariantStyleInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutProductVariantStyleInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}

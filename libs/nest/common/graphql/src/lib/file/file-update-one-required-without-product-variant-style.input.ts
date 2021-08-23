import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutProductVariantStyleInput } from './file-create-without-product-variant-style.input';
import { FileCreateOrConnectWithoutProductVariantStyleInput } from './file-create-or-connect-without-product-variant-style.input';
import { FileUpsertWithoutProductVariantStyleInput } from './file-upsert-without-product-variant-style.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutProductVariantStyleInput } from './file-update-without-product-variant-style.input';

@InputType()
export class FileUpdateOneRequiredWithoutProductVariantStyleInput {

    @Field(() => FileCreateWithoutProductVariantStyleInput, {nullable:true})
    create?: FileCreateWithoutProductVariantStyleInput;

    @Field(() => FileCreateOrConnectWithoutProductVariantStyleInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutProductVariantStyleInput;

    @Field(() => FileUpsertWithoutProductVariantStyleInput, {nullable:true})
    upsert?: FileUpsertWithoutProductVariantStyleInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutProductVariantStyleInput, {nullable:true})
    update?: FileUpdateWithoutProductVariantStyleInput;
}

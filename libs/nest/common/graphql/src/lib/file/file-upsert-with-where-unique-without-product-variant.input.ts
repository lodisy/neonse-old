import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutProductVariantInput } from './file-update-without-product-variant.input';
import { FileCreateWithoutProductVariantInput } from './file-create-without-product-variant.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutProductVariantInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutProductVariantInput, {nullable:false})
    update!: FileUpdateWithoutProductVariantInput;

    @Field(() => FileCreateWithoutProductVariantInput, {nullable:false})
    create!: FileCreateWithoutProductVariantInput;
}

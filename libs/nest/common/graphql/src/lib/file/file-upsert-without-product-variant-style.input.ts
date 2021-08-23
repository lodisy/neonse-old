import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutProductVariantStyleInput } from './file-update-without-product-variant-style.input';
import { FileCreateWithoutProductVariantStyleInput } from './file-create-without-product-variant-style.input';

@InputType()
export class FileUpsertWithoutProductVariantStyleInput {

    @Field(() => FileUpdateWithoutProductVariantStyleInput, {nullable:false})
    update!: FileUpdateWithoutProductVariantStyleInput;

    @Field(() => FileCreateWithoutProductVariantStyleInput, {nullable:false})
    create!: FileCreateWithoutProductVariantStyleInput;
}

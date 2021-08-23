import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutProductVariantInput } from './file-update-without-product-variant.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutProductVariantInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutProductVariantInput, {nullable:false})
    data!: FileUpdateWithoutProductVariantInput;
}

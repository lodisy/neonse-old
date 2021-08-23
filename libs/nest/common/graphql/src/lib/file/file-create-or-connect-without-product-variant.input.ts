import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutProductVariantInput } from './file-create-without-product-variant.input';

@InputType()
export class FileCreateOrConnectWithoutProductVariantInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutProductVariantInput, {nullable:false})
    create!: FileCreateWithoutProductVariantInput;
}

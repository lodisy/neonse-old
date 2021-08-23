import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutProductVariantStyleInput } from './file-create-without-product-variant-style.input';

@InputType()
export class FileCreateOrConnectWithoutProductVariantStyleInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutProductVariantStyleInput, {nullable:false})
    create!: FileCreateWithoutProductVariantStyleInput;
}

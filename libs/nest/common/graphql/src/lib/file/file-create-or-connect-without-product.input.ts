import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutProductInput } from './file-create-without-product.input';

@InputType()
export class FileCreateOrConnectWithoutProductInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutProductInput, {nullable:false})
    create!: FileCreateWithoutProductInput;
}

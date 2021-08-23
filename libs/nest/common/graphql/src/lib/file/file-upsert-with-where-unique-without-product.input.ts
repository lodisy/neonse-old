import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutProductInput } from './file-update-without-product.input';
import { FileCreateWithoutProductInput } from './file-create-without-product.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutProductInput, {nullable:false})
    update!: FileUpdateWithoutProductInput;

    @Field(() => FileCreateWithoutProductInput, {nullable:false})
    create!: FileCreateWithoutProductInput;
}

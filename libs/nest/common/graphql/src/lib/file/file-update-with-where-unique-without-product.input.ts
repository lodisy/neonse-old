import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutProductInput } from './file-update-without-product.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutProductInput, {nullable:false})
    data!: FileUpdateWithoutProductInput;
}

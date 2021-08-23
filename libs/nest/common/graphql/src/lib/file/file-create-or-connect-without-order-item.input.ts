import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutOrderItemInput } from './file-create-without-order-item.input';

@InputType()
export class FileCreateOrConnectWithoutOrderItemInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutOrderItemInput, {nullable:false})
    create!: FileCreateWithoutOrderItemInput;
}

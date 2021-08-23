import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutOrderItemInput } from './file-update-without-order-item.input';
import { FileCreateWithoutOrderItemInput } from './file-create-without-order-item.input';

@InputType()
export class FileUpsertWithoutOrderItemInput {

    @Field(() => FileUpdateWithoutOrderItemInput, {nullable:false})
    update!: FileUpdateWithoutOrderItemInput;

    @Field(() => FileCreateWithoutOrderItemInput, {nullable:false})
    create!: FileCreateWithoutOrderItemInput;
}

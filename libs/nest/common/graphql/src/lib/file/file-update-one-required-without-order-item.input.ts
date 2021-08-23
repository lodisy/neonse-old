import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutOrderItemInput } from './file-create-without-order-item.input';
import { FileCreateOrConnectWithoutOrderItemInput } from './file-create-or-connect-without-order-item.input';
import { FileUpsertWithoutOrderItemInput } from './file-upsert-without-order-item.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutOrderItemInput } from './file-update-without-order-item.input';

@InputType()
export class FileUpdateOneRequiredWithoutOrderItemInput {

    @Field(() => FileCreateWithoutOrderItemInput, {nullable:true})
    create?: FileCreateWithoutOrderItemInput;

    @Field(() => FileCreateOrConnectWithoutOrderItemInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutOrderItemInput;

    @Field(() => FileUpsertWithoutOrderItemInput, {nullable:true})
    upsert?: FileUpsertWithoutOrderItemInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutOrderItemInput, {nullable:true})
    update?: FileUpdateWithoutOrderItemInput;
}

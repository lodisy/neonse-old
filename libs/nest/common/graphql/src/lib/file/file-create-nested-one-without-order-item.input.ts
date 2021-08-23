import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutOrderItemInput } from './file-create-without-order-item.input';
import { FileCreateOrConnectWithoutOrderItemInput } from './file-create-or-connect-without-order-item.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutOrderItemInput {

    @Field(() => FileCreateWithoutOrderItemInput, {nullable:true})
    create?: FileCreateWithoutOrderItemInput;

    @Field(() => FileCreateOrConnectWithoutOrderItemInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutOrderItemInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}

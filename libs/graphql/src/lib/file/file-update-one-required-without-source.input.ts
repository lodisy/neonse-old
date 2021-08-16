import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutSourceInput } from './file-create-without-source.input';
import { FileCreateOrConnectWithoutSourceInput } from './file-create-or-connect-without-source.input';
import { FileUpsertWithoutSourceInput } from './file-upsert-without-source.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutSourceInput } from './file-update-without-source.input';

@InputType()
export class FileUpdateOneRequiredWithoutSourceInput {

    @Field(() => FileCreateWithoutSourceInput, {nullable:true})
    create?: FileCreateWithoutSourceInput;

    @Field(() => FileCreateOrConnectWithoutSourceInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutSourceInput;

    @Field(() => FileUpsertWithoutSourceInput, {nullable:true})
    upsert?: FileUpsertWithoutSourceInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutSourceInput, {nullable:true})
    update?: FileUpdateWithoutSourceInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SourceCreateWithoutFileInput } from './source-create-without-file.input';
import { SourceCreateOrConnectWithoutFileInput } from './source-create-or-connect-without-file.input';
import { SourceUpsertWithoutFileInput } from './source-upsert-without-file.input';
import { SourceWhereUniqueInput } from './source-where-unique.input';
import { SourceUpdateWithoutFileInput } from './source-update-without-file.input';

@InputType()
export class SourceUncheckedUpdateOneWithoutFileInput {

    @Field(() => SourceCreateWithoutFileInput, {nullable:true})
    create?: SourceCreateWithoutFileInput;

    @Field(() => SourceCreateOrConnectWithoutFileInput, {nullable:true})
    connectOrCreate?: SourceCreateOrConnectWithoutFileInput;

    @Field(() => SourceUpsertWithoutFileInput, {nullable:true})
    upsert?: SourceUpsertWithoutFileInput;

    @Field(() => SourceWhereUniqueInput, {nullable:true})
    connect?: SourceWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SourceUpdateWithoutFileInput, {nullable:true})
    update?: SourceUpdateWithoutFileInput;
}

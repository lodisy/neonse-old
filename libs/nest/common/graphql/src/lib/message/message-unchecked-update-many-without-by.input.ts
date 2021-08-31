import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutByInput } from './message-create-without-by.input';
import { MessageCreateOrConnectWithoutByInput } from './message-create-or-connect-without-by.input';
import { MessageUpsertWithWhereUniqueWithoutByInput } from './message-upsert-with-where-unique-without-by.input';
import { MessageCreateManyByInputEnvelope } from './message-create-many-by-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutByInput } from './message-update-with-where-unique-without-by.input';
import { MessageUpdateManyWithWhereWithoutByInput } from './message-update-many-with-where-without-by.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutByInput {

    @Field(() => [MessageCreateWithoutByInput], {nullable:true})
    create?: Array<MessageCreateWithoutByInput>;

    @Field(() => [MessageCreateOrConnectWithoutByInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutByInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutByInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutByInput>;

    @Field(() => MessageCreateManyByInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyByInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutByInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutByInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutByInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutByInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}

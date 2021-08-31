import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutToInput } from './message-create-without-to.input';
import { MessageCreateOrConnectWithoutToInput } from './message-create-or-connect-without-to.input';
import { MessageUpsertWithWhereUniqueWithoutToInput } from './message-upsert-with-where-unique-without-to.input';
import { MessageCreateManyToInputEnvelope } from './message-create-many-to-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutToInput } from './message-update-with-where-unique-without-to.input';
import { MessageUpdateManyWithWhereWithoutToInput } from './message-update-many-with-where-without-to.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutToInput {

    @Field(() => [MessageCreateWithoutToInput], {nullable:true})
    create?: Array<MessageCreateWithoutToInput>;

    @Field(() => [MessageCreateOrConnectWithoutToInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutToInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutToInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutToInput>;

    @Field(() => MessageCreateManyToInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyToInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutToInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutToInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutToInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutToInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}

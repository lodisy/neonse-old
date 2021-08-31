import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutToInput } from './message-create-without-to.input';
import { MessageCreateOrConnectWithoutToInput } from './message-create-or-connect-without-to.input';
import { MessageCreateManyToInputEnvelope } from './message-create-many-to-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutToInput {

    @Field(() => [MessageCreateWithoutToInput], {nullable:true})
    create?: Array<MessageCreateWithoutToInput>;

    @Field(() => [MessageCreateOrConnectWithoutToInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutToInput>;

    @Field(() => MessageCreateManyToInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyToInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutByInput } from './message-create-without-by.input';
import { MessageCreateOrConnectWithoutByInput } from './message-create-or-connect-without-by.input';
import { MessageCreateManyByInputEnvelope } from './message-create-many-by-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutByInput {

    @Field(() => [MessageCreateWithoutByInput], {nullable:true})
    create?: Array<MessageCreateWithoutByInput>;

    @Field(() => [MessageCreateOrConnectWithoutByInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutByInput>;

    @Field(() => MessageCreateManyByInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyByInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;
}

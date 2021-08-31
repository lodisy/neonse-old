import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutByInput } from './message-create-without-by.input';

@InputType()
export class MessageCreateOrConnectWithoutByInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutByInput, {nullable:false})
    create!: MessageCreateWithoutByInput;
}

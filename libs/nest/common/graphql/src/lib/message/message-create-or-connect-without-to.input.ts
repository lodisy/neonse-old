import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutToInput } from './message-create-without-to.input';

@InputType()
export class MessageCreateOrConnectWithoutToInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutToInput, {nullable:false})
    create!: MessageCreateWithoutToInput;
}

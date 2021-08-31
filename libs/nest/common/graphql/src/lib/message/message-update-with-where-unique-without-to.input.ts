import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutToInput } from './message-update-without-to.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutToInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutToInput, {nullable:false})
    data!: MessageUpdateWithoutToInput;
}

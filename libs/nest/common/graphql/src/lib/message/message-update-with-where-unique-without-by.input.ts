import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutByInput } from './message-update-without-by.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutByInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutByInput, {nullable:false})
    data!: MessageUpdateWithoutByInput;
}

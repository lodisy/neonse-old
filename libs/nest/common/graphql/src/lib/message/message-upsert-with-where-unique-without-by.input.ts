import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutByInput } from './message-update-without-by.input';
import { MessageCreateWithoutByInput } from './message-create-without-by.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutByInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutByInput, {nullable:false})
    update!: MessageUpdateWithoutByInput;

    @Field(() => MessageCreateWithoutByInput, {nullable:false})
    create!: MessageCreateWithoutByInput;
}

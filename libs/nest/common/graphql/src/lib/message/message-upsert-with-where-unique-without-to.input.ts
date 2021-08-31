import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutToInput } from './message-update-without-to.input';
import { MessageCreateWithoutToInput } from './message-create-without-to.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutToInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutToInput, {nullable:false})
    update!: MessageUpdateWithoutToInput;

    @Field(() => MessageCreateWithoutToInput, {nullable:false})
    create!: MessageCreateWithoutToInput;
}

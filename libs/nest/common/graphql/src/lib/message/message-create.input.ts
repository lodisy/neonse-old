import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutMessagesSentInput } from '../profile/profile-create-nested-one-without-messages-sent.input';
import { ProfileCreateNestedOneWithoutMessagesReceivedInput } from '../profile/profile-create-nested-one-without-messages-received.input';

@InputType()
export class MessageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Boolean, {nullable:true})
    reported?: boolean;

    @Field(() => ProfileCreateNestedOneWithoutMessagesSentInput, {nullable:false})
    by!: ProfileCreateNestedOneWithoutMessagesSentInput;

    @Field(() => ProfileCreateNestedOneWithoutMessagesReceivedInput, {nullable:true})
    to?: ProfileCreateNestedOneWithoutMessagesReceivedInput;
}

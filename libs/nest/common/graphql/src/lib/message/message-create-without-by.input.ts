import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutMessagesReceivedInput } from '../profile/profile-create-nested-one-without-messages-received.input';

@InputType()
export class MessageCreateWithoutByInput {

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

    @Field(() => ProfileCreateNestedOneWithoutMessagesReceivedInput, {nullable:true})
    to?: ProfileCreateNestedOneWithoutMessagesReceivedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutMessagesReceivedInput } from './profile-update-without-messages-received.input';
import { ProfileCreateWithoutMessagesReceivedInput } from './profile-create-without-messages-received.input';

@InputType()
export class ProfileUpsertWithoutMessagesReceivedInput {

    @Field(() => ProfileUpdateWithoutMessagesReceivedInput, {nullable:false})
    update!: ProfileUpdateWithoutMessagesReceivedInput;

    @Field(() => ProfileCreateWithoutMessagesReceivedInput, {nullable:false})
    create!: ProfileCreateWithoutMessagesReceivedInput;
}

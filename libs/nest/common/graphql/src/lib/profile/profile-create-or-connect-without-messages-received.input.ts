import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutMessagesReceivedInput } from './profile-create-without-messages-received.input';

@InputType()
export class ProfileCreateOrConnectWithoutMessagesReceivedInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutMessagesReceivedInput, {nullable:false})
    create!: ProfileCreateWithoutMessagesReceivedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMessagesReceivedInput } from './profile-create-without-messages-received.input';
import { ProfileCreateOrConnectWithoutMessagesReceivedInput } from './profile-create-or-connect-without-messages-received.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutMessagesReceivedInput {

    @Field(() => ProfileCreateWithoutMessagesReceivedInput, {nullable:true})
    create?: ProfileCreateWithoutMessagesReceivedInput;

    @Field(() => ProfileCreateOrConnectWithoutMessagesReceivedInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutMessagesReceivedInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;
}

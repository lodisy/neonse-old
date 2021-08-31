import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMessagesReceivedInput } from './profile-create-without-messages-received.input';
import { ProfileCreateOrConnectWithoutMessagesReceivedInput } from './profile-create-or-connect-without-messages-received.input';
import { ProfileUpsertWithoutMessagesReceivedInput } from './profile-upsert-without-messages-received.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutMessagesReceivedInput } from './profile-update-without-messages-received.input';

@InputType()
export class ProfileUpdateOneWithoutMessagesReceivedInput {

    @Field(() => ProfileCreateWithoutMessagesReceivedInput, {nullable:true})
    create?: ProfileCreateWithoutMessagesReceivedInput;

    @Field(() => ProfileCreateOrConnectWithoutMessagesReceivedInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutMessagesReceivedInput;

    @Field(() => ProfileUpsertWithoutMessagesReceivedInput, {nullable:true})
    upsert?: ProfileUpsertWithoutMessagesReceivedInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProfileUpdateWithoutMessagesReceivedInput, {nullable:true})
    update?: ProfileUpdateWithoutMessagesReceivedInput;
}

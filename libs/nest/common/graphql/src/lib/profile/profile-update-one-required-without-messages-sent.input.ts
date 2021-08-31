import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMessagesSentInput } from './profile-create-without-messages-sent.input';
import { ProfileCreateOrConnectWithoutMessagesSentInput } from './profile-create-or-connect-without-messages-sent.input';
import { ProfileUpsertWithoutMessagesSentInput } from './profile-upsert-without-messages-sent.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutMessagesSentInput } from './profile-update-without-messages-sent.input';

@InputType()
export class ProfileUpdateOneRequiredWithoutMessagesSentInput {

    @Field(() => ProfileCreateWithoutMessagesSentInput, {nullable:true})
    create?: ProfileCreateWithoutMessagesSentInput;

    @Field(() => ProfileCreateOrConnectWithoutMessagesSentInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutMessagesSentInput;

    @Field(() => ProfileUpsertWithoutMessagesSentInput, {nullable:true})
    upsert?: ProfileUpsertWithoutMessagesSentInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutMessagesSentInput, {nullable:true})
    update?: ProfileUpdateWithoutMessagesSentInput;
}

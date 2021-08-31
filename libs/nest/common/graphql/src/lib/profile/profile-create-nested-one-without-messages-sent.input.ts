import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMessagesSentInput } from './profile-create-without-messages-sent.input';
import { ProfileCreateOrConnectWithoutMessagesSentInput } from './profile-create-or-connect-without-messages-sent.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutMessagesSentInput {

    @Field(() => ProfileCreateWithoutMessagesSentInput, {nullable:true})
    create?: ProfileCreateWithoutMessagesSentInput;

    @Field(() => ProfileCreateOrConnectWithoutMessagesSentInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutMessagesSentInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;
}

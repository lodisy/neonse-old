import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutMessagesSentInput } from './profile-create-without-messages-sent.input';

@InputType()
export class ProfileCreateOrConnectWithoutMessagesSentInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutMessagesSentInput, {nullable:false})
    create!: ProfileCreateWithoutMessagesSentInput;
}

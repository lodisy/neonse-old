import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutMessagesSentInput } from './profile-update-without-messages-sent.input';
import { ProfileCreateWithoutMessagesSentInput } from './profile-create-without-messages-sent.input';

@InputType()
export class ProfileUpsertWithoutMessagesSentInput {

    @Field(() => ProfileUpdateWithoutMessagesSentInput, {nullable:false})
    update!: ProfileUpdateWithoutMessagesSentInput;

    @Field(() => ProfileCreateWithoutMessagesSentInput, {nullable:false})
    create!: ProfileCreateWithoutMessagesSentInput;
}

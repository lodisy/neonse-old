import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutMessagesSentInput } from '../profile/profile-create-nested-one-without-messages-sent.input';

@InputType()
export class MessageCreateWithoutToInput {

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
}

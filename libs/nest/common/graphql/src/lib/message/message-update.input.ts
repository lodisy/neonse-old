import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { ProfileUpdateOneRequiredWithoutMessagesSentInput } from '../profile/profile-update-one-required-without-messages-sent.input';
import { ProfileUpdateOneWithoutMessagesReceivedInput } from '../profile/profile-update-one-without-messages-received.input';

@InputType()
export class MessageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    reported?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneRequiredWithoutMessagesSentInput, {nullable:true})
    by?: ProfileUpdateOneRequiredWithoutMessagesSentInput;

    @Field(() => ProfileUpdateOneWithoutMessagesReceivedInput, {nullable:true})
    to?: ProfileUpdateOneWithoutMessagesReceivedInput;
}

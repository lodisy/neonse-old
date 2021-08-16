import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdaterolesInput } from '../prisma/user-updateroles.input';
import { ProfileUpdateOneWithoutUserInput } from '../profile/profile-update-one-without-user.input';

@InputType()
export class UserUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    password?: StringFieldUpdateOperationsInput;

    @HideField()
    jwtToken?: StringFieldUpdateOperationsInput;

    @HideField()
    resetPasswordToken?: StringFieldUpdateOperationsInput;

    @HideField()
    identifierToken?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @HideField()
    roles?: UserUpdaterolesInput;

    @Field(() => ProfileUpdateOneWithoutUserInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserInput;
}

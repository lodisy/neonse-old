import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { HideField } from '@nestjs/graphql'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { RoleUpdateManyWithoutUsersInput } from '../role/role-update-many-without-users.input'
import { ProfileUpdateOneWithoutUserInput } from '../profile/profile-update-one-without-user.input'

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    email?: StringFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    username?: NullableStringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    password?: StringFieldUpdateOperationsInput

    @HideField()
    jwtToken?: StringFieldUpdateOperationsInput

    @HideField()
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput

    @HideField()
    identifierToken?: NullableStringFieldUpdateOperationsInput

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput

    @HideField()
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput

    @HideField()
    roles?: RoleUpdateManyWithoutUsersInput

    @Field(() => ProfileUpdateOneWithoutUserInput, { nullable: true })
    profile?: ProfileUpdateOneWithoutUserInput
}

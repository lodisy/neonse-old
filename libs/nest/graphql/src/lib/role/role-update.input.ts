import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { NullableEnumRoleStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-status-field-update-operations.input'
import { HideField } from '@nestjs/graphql'
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { UserUpdateManyWithoutRolesInput } from '../user/user-update-many-without-roles.input'

@InputType()
export class RoleUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    slug?: StringFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    description?: NullableStringFieldUpdateOperationsInput

    @HideField()
    status?: NullableEnumRoleStatusFieldUpdateOperationsInput

    @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
    isDefault?: NullableBoolFieldUpdateOperationsInput

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    createdAt?: DateTimeFieldUpdateOperationsInput

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput

    @Field(() => UserUpdateManyWithoutRolesInput, { nullable: true })
    users?: UserUpdateManyWithoutRolesInput
}

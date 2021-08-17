import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { HideField } from '@nestjs/graphql'
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input'
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input'

@InputType()
export class ProfileUncheckedUpdateManyWithoutFollowedByInput {
    @HideField()
    id?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    userId?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput

    @Field(() => NullableBigIntFieldUpdateOperationsInput, { nullable: true })
    phone?: NullableBigIntFieldUpdateOperationsInput

    @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
    point?: NullableIntFieldUpdateOperationsInput

    @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
    level?: NullableIntFieldUpdateOperationsInput
}

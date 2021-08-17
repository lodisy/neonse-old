import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { ProfileUpdateOneWithoutCommentsInput } from '../profile/profile-update-one-without-comments.input'

@InputType()
export class CommentUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    email?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    content?: StringFieldUpdateOperationsInput

    @Field(() => ProfileUpdateOneWithoutCommentsInput, { nullable: true })
    by?: ProfileUpdateOneWithoutCommentsInput
}

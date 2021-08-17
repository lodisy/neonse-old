import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { EnumContentTypeFieldUpdateOperationsInput } from '../prisma/enum-content-type-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { ProductUpdateOneWithoutLikesInput } from '../product/product-update-one-without-likes.input'

@InputType()
export class LikeUpdateWithoutByInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => EnumContentTypeFieldUpdateOperationsInput, { nullable: true })
    type?: EnumContentTypeFieldUpdateOperationsInput

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    createdAt?: DateTimeFieldUpdateOperationsInput

    @Field(() => ProductUpdateOneWithoutLikesInput, { nullable: true })
    product?: ProductUpdateOneWithoutLikesInput
}

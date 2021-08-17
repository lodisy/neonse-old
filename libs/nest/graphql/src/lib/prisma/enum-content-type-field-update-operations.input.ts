import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ContentType } from './content-type.enum'

@InputType()
export class EnumContentTypeFieldUpdateOperationsInput {
    @Field(() => ContentType, { nullable: true })
    set?: keyof typeof ContentType
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class NestedBytesFilter {
    @Field(() => String, { nullable: true })
    equals?: Buffer

    @Field(() => NestedBytesFilter, { nullable: true })
    not?: NestedBytesFilter
}

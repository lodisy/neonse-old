import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Size } from './size.enum'
import { NestedEnumSizeFilter } from './nested-enum-size-filter.input'

@InputType()
export class EnumSizeFilter {
    @Field(() => Size, { nullable: true })
    equals?: keyof typeof Size;

    @Field(() => [Size], { nullable: true })
    in?: Array<keyof typeof Size>

    @Field(() => [Size], { nullable: true })
    notIn?: Array<keyof typeof Size>

    @Field(() => NestedEnumSizeFilter, { nullable: true })
    not?: NestedEnumSizeFilter
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ProductCategoryUncheckedCreateWithoutChildrenInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => String, { nullable: true })
    parentId?: string
}

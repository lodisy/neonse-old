import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ProductCategoryMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    name?: true

    @Field(() => Boolean, { nullable: true })
    slug?: true

    @Field(() => Boolean, { nullable: true })
    parentId?: true
}

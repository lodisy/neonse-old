import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class RoleCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    name?: true

    @Field(() => Boolean, { nullable: true })
    slug?: true

    @Field(() => Boolean, { nullable: true })
    description?: true

    @HideField()
    status?: true

    @Field(() => Boolean, { nullable: true })
    isDefault?: true

    @Field(() => Boolean, { nullable: true })
    createdAt?: true

    @Field(() => Boolean, { nullable: true })
    updatedAt?: true

    @Field(() => Boolean, { nullable: true })
    _all?: true
}

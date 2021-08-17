import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ProfileCreateNestedManyWithoutBrandsInput } from '../profile/profile-create-nested-many-without-brands.input'

@InputType()
export class BrandCreateWithoutProductsInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => String, { nullable: true })
    country?: string

    @Field(() => Int, { nullable: true })
    year?: number

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => ProfileCreateNestedManyWithoutBrandsInput, { nullable: true })
    founders?: ProfileCreateNestedManyWithoutBrandsInput
}

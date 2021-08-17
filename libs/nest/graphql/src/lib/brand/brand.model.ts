import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Profile } from '../profile/profile.model'
import { Int } from '@nestjs/graphql'
import { Product } from '../product/product.model'

@ObjectType()
export class Brand {
    @Field(() => ID, { nullable: false })
    id!: string
    @Field(() => String, { nullable: false })
    name!: string
    @Field(() => String, { nullable: false })
    slug!: string
    @Field(() => [Profile], { nullable: true })
    founders?: Array<Profile>
    @Field(() => String, { nullable: true })
    country!: string | null
    @Field(() => Int, { nullable: true })
    year!: number | null
    @Field(() => String, { nullable: true })
    description!: string | null
    @Field(() => [Product], { nullable: true })
    products?: Array<Product>
}

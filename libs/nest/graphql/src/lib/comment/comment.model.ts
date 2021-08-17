import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Profile } from '../profile/profile.model'

@ObjectType()
export class Comment {
    @Field(() => ID, { nullable: false })
    id!: string
    @Field(() => String, { nullable: false })
    name!: string
    @Field(() => String, { nullable: false })
    email!: string
    @Field(() => Profile, { nullable: true })
    by?: Profile
    @Field(() => String, { nullable: true })
    profileId!: string | null
    @Field(() => String, { nullable: false })
    content!: string
}

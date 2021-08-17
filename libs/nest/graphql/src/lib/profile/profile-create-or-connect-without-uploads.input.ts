import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileCreateWithoutUploadsInput } from './profile-create-without-uploads.input'

@InputType()
export class ProfileCreateOrConnectWithoutUploadsInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput

    @Field(() => ProfileCreateWithoutUploadsInput, { nullable: false })
    create!: ProfileCreateWithoutUploadsInput
}

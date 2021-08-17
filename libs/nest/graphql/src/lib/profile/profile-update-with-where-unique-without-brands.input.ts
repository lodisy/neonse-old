import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutBrandsInput } from './profile-update-without-brands.input'

@InputType()
export class ProfileUpdateWithWhereUniqueWithoutBrandsInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput

    @Field(() => ProfileUpdateWithoutBrandsInput, { nullable: false })
    data!: ProfileUpdateWithoutBrandsInput
}

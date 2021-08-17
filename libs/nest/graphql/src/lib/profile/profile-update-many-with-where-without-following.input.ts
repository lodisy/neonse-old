import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileScalarWhereInput } from './profile-scalar-where.input'
import { ProfileUpdateManyMutationInput } from './profile-update-many-mutation.input'

@InputType()
export class ProfileUpdateManyWithWhereWithoutFollowingInput {
    @Field(() => ProfileScalarWhereInput, { nullable: false })
    where!: ProfileScalarWhereInput

    @Field(() => ProfileUpdateManyMutationInput, { nullable: false })
    data!: ProfileUpdateManyMutationInput
}

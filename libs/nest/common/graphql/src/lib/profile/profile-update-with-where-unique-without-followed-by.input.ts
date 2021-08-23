import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutFollowedByInput } from './profile-update-without-followed-by.input';

@InputType()
export class ProfileUpdateWithWhereUniqueWithoutFollowedByInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutFollowedByInput, {nullable:false})
    data!: ProfileUpdateWithoutFollowedByInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutFollowingInput } from './profile-create-without-following.input';

@InputType()
export class ProfileCreateOrConnectWithoutFollowingInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutFollowingInput, {nullable:false})
    create!: ProfileCreateWithoutFollowingInput;
}

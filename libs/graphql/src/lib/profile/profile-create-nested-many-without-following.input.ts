import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutFollowingInput } from './profile-create-without-following.input';
import { ProfileCreateOrConnectWithoutFollowingInput } from './profile-create-or-connect-without-following.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedManyWithoutFollowingInput {

    @Field(() => [ProfileCreateWithoutFollowingInput], {nullable:true})
    create?: Array<ProfileCreateWithoutFollowingInput>;

    @Field(() => [ProfileCreateOrConnectWithoutFollowingInput], {nullable:true})
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutFollowingInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    connect?: Array<ProfileWhereUniqueInput>;
}

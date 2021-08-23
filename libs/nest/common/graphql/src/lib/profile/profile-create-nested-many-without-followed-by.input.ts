import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutFollowedByInput } from './profile-create-without-followed-by.input';
import { ProfileCreateOrConnectWithoutFollowedByInput } from './profile-create-or-connect-without-followed-by.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedManyWithoutFollowedByInput {

    @Field(() => [ProfileCreateWithoutFollowedByInput], {nullable:true})
    create?: Array<ProfileCreateWithoutFollowedByInput>;

    @Field(() => [ProfileCreateOrConnectWithoutFollowedByInput], {nullable:true})
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutFollowedByInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    connect?: Array<ProfileWhereUniqueInput>;
}

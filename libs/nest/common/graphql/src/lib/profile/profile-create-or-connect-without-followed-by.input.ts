import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutFollowedByInput } from './profile-create-without-followed-by.input';

@InputType()
export class ProfileCreateOrConnectWithoutFollowedByInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutFollowedByInput, {nullable:false})
    create!: ProfileCreateWithoutFollowedByInput;
}

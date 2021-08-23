import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutFollowedByInput } from './profile-create-without-followed-by.input';
import { ProfileCreateOrConnectWithoutFollowedByInput } from './profile-create-or-connect-without-followed-by.input';
import { ProfileUpsertWithWhereUniqueWithoutFollowedByInput } from './profile-upsert-with-where-unique-without-followed-by.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithWhereUniqueWithoutFollowedByInput } from './profile-update-with-where-unique-without-followed-by.input';
import { ProfileUpdateManyWithWhereWithoutFollowedByInput } from './profile-update-many-with-where-without-followed-by.input';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';

@InputType()
export class ProfileUpdateManyWithoutFollowedByInput {

    @Field(() => [ProfileCreateWithoutFollowedByInput], {nullable:true})
    create?: Array<ProfileCreateWithoutFollowedByInput>;

    @Field(() => [ProfileCreateOrConnectWithoutFollowedByInput], {nullable:true})
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutFollowedByInput>;

    @Field(() => [ProfileUpsertWithWhereUniqueWithoutFollowedByInput], {nullable:true})
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutFollowedByInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    connect?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    set?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    delete?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileUpdateWithWhereUniqueWithoutFollowedByInput], {nullable:true})
    update?: Array<ProfileUpdateWithWhereUniqueWithoutFollowedByInput>;

    @Field(() => [ProfileUpdateManyWithWhereWithoutFollowedByInput], {nullable:true})
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutFollowedByInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProfileScalarWhereInput>;
}

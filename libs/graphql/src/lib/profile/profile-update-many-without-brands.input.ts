import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutBrandsInput } from './profile-create-without-brands.input';
import { ProfileCreateOrConnectWithoutBrandsInput } from './profile-create-or-connect-without-brands.input';
import { ProfileUpsertWithWhereUniqueWithoutBrandsInput } from './profile-upsert-with-where-unique-without-brands.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithWhereUniqueWithoutBrandsInput } from './profile-update-with-where-unique-without-brands.input';
import { ProfileUpdateManyWithWhereWithoutBrandsInput } from './profile-update-many-with-where-without-brands.input';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';

@InputType()
export class ProfileUpdateManyWithoutBrandsInput {

    @Field(() => [ProfileCreateWithoutBrandsInput], {nullable:true})
    create?: Array<ProfileCreateWithoutBrandsInput>;

    @Field(() => [ProfileCreateOrConnectWithoutBrandsInput], {nullable:true})
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutBrandsInput>;

    @Field(() => [ProfileUpsertWithWhereUniqueWithoutBrandsInput], {nullable:true})
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutBrandsInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    connect?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    set?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    delete?: Array<ProfileWhereUniqueInput>;

    @Field(() => [ProfileUpdateWithWhereUniqueWithoutBrandsInput], {nullable:true})
    update?: Array<ProfileUpdateWithWhereUniqueWithoutBrandsInput>;

    @Field(() => [ProfileUpdateManyWithWhereWithoutBrandsInput], {nullable:true})
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutBrandsInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProfileScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutBrandsInput } from './profile-create-without-brands.input';
import { ProfileCreateOrConnectWithoutBrandsInput } from './profile-create-or-connect-without-brands.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedManyWithoutBrandsInput {

    @Field(() => [ProfileCreateWithoutBrandsInput], {nullable:true})
    create?: Array<ProfileCreateWithoutBrandsInput>;

    @Field(() => [ProfileCreateOrConnectWithoutBrandsInput], {nullable:true})
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutBrandsInput>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    connect?: Array<ProfileWhereUniqueInput>;
}

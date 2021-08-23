import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutBrandsInput } from './profile-create-without-brands.input';

@InputType()
export class ProfileCreateOrConnectWithoutBrandsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutBrandsInput, {nullable:false})
    create!: ProfileCreateWithoutBrandsInput;
}

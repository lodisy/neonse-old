import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutBrandsInput } from './profile-update-without-brands.input';
import { ProfileCreateWithoutBrandsInput } from './profile-create-without-brands.input';

@InputType()
export class ProfileUpsertWithWhereUniqueWithoutBrandsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutBrandsInput, {nullable:false})
    update!: ProfileUpdateWithoutBrandsInput;

    @Field(() => ProfileCreateWithoutBrandsInput, {nullable:false})
    create!: ProfileCreateWithoutBrandsInput;
}

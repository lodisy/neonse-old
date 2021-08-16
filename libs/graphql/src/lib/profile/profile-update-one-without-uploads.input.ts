import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUploadsInput } from './profile-create-without-uploads.input';
import { ProfileCreateOrConnectWithoutUploadsInput } from './profile-create-or-connect-without-uploads.input';
import { ProfileUpsertWithoutUploadsInput } from './profile-upsert-without-uploads.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutUploadsInput } from './profile-update-without-uploads.input';

@InputType()
export class ProfileUpdateOneWithoutUploadsInput {

    @Field(() => ProfileCreateWithoutUploadsInput, {nullable:true})
    create?: ProfileCreateWithoutUploadsInput;

    @Field(() => ProfileCreateOrConnectWithoutUploadsInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutUploadsInput;

    @Field(() => ProfileUpsertWithoutUploadsInput, {nullable:true})
    upsert?: ProfileUpsertWithoutUploadsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProfileUpdateWithoutUploadsInput, {nullable:true})
    update?: ProfileUpdateWithoutUploadsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUploadsInput } from './profile-create-without-uploads.input';
import { ProfileCreateOrConnectWithoutUploadsInput } from './profile-create-or-connect-without-uploads.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutUploadsInput {

    @Field(() => ProfileCreateWithoutUploadsInput, {nullable:true})
    create?: ProfileCreateWithoutUploadsInput;

    @Field(() => ProfileCreateOrConnectWithoutUploadsInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutUploadsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;
}

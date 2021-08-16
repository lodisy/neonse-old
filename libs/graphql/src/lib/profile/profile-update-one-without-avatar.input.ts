import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutAvatarInput } from './profile-create-without-avatar.input';
import { ProfileCreateOrConnectWithoutAvatarInput } from './profile-create-or-connect-without-avatar.input';
import { ProfileUpsertWithoutAvatarInput } from './profile-upsert-without-avatar.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutAvatarInput } from './profile-update-without-avatar.input';

@InputType()
export class ProfileUpdateOneWithoutAvatarInput {

    @Field(() => ProfileCreateWithoutAvatarInput, {nullable:true})
    create?: ProfileCreateWithoutAvatarInput;

    @Field(() => ProfileCreateOrConnectWithoutAvatarInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput;

    @Field(() => ProfileUpsertWithoutAvatarInput, {nullable:true})
    upsert?: ProfileUpsertWithoutAvatarInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProfileUpdateWithoutAvatarInput, {nullable:true})
    update?: ProfileUpdateWithoutAvatarInput;
}

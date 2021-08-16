import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutLikesInput } from './profile-create-without-likes.input';
import { ProfileCreateOrConnectWithoutLikesInput } from './profile-create-or-connect-without-likes.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutLikesInput {

    @Field(() => ProfileCreateWithoutLikesInput, {nullable:true})
    create?: ProfileCreateWithoutLikesInput;

    @Field(() => ProfileCreateOrConnectWithoutLikesInput, {nullable:true})
    connectOrCreate?: ProfileCreateOrConnectWithoutLikesInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: ProfileWhereUniqueInput;
}

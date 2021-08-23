import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutLikesInput } from './profile-create-without-likes.input';

@InputType()
export class ProfileCreateOrConnectWithoutLikesInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutLikesInput, {nullable:false})
    create!: ProfileCreateWithoutLikesInput;
}

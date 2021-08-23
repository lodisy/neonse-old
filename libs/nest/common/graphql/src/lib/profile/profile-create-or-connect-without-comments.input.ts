import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateWithoutCommentsInput } from './profile-create-without-comments.input';

@InputType()
export class ProfileCreateOrConnectWithoutCommentsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutCommentsInput, {nullable:false})
    create!: ProfileCreateWithoutCommentsInput;
}

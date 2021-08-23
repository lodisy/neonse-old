import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutCommentsInput } from './profile-update-without-comments.input';
import { ProfileCreateWithoutCommentsInput } from './profile-create-without-comments.input';

@InputType()
export class ProfileUpsertWithoutCommentsInput {

    @Field(() => ProfileUpdateWithoutCommentsInput, {nullable:false})
    update!: ProfileUpdateWithoutCommentsInput;

    @Field(() => ProfileCreateWithoutCommentsInput, {nullable:false})
    create!: ProfileCreateWithoutCommentsInput;
}

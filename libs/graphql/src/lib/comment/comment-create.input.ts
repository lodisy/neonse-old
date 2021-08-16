import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutCommentsInput } from '../profile/profile-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => ProfileCreateNestedOneWithoutCommentsInput, {nullable:true})
    by?: ProfileCreateNestedOneWithoutCommentsInput;
}

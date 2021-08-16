import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentType } from '../prisma/content-type.enum';
import { ProfileCreateNestedOneWithoutLikesInput } from '../profile/profile-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ContentType, {nullable:false})
    type!: keyof typeof ContentType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ProfileCreateNestedOneWithoutLikesInput, {nullable:false})
    by!: ProfileCreateNestedOneWithoutLikesInput;
}

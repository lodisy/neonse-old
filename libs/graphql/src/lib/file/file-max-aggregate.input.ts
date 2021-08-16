import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class FileMaxAggregateInput {

    @HideField()
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    alt?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    caption?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    size?: true;

    @Field(() => Boolean, {nullable:true})
    width?: true;

    @Field(() => Boolean, {nullable:true})
    height?: true;

    @Field(() => Boolean, {nullable:true})
    autoPlay?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    profileId?: true;

    @Field(() => Boolean, {nullable:true})
    profileAvatarId?: true;

    @Field(() => Boolean, {nullable:true})
    reviewId?: true;
}

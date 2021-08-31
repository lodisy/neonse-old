import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';

/** 聊天信息 */
@ObjectType({description:'聊天信息'})
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Profile, {nullable:false})
    by?: Profile;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => Profile, {nullable:true})
    to?: Profile;

    @Field(() => String, {nullable:true})
    receiverId!: string | null;

    @Field(() => Boolean, {nullable:true})
    reported!: boolean | null;
}

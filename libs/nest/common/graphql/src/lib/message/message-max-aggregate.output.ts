import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    senderId?: string;

    @Field(() => String, {nullable:true})
    receiverId?: string;

    @Field(() => Boolean, {nullable:true})
    reported?: boolean;
}

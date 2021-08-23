import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentType } from '../prisma/content-type.enum';

@ObjectType()
export class LikeMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => ContentType, {nullable:true})
    type?: keyof typeof ContentType;

    @Field(() => String, {nullable:true})
    productId?: string;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GuestMinAggregate {

    @Field(() => String, {nullable:true})
    identifierToken?: string;

    @Field(() => String, {nullable:true})
    email?: string;
}

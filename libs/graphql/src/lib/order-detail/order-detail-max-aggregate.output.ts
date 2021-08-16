import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderDetailMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}

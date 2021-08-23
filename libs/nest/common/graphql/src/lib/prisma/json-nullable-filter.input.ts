import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class JsonNullableFilter {

    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

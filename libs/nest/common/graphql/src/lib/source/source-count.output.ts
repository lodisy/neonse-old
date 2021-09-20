import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SourceCount {

    @Field(() => Int, {nullable:false})
    File!: number;
}

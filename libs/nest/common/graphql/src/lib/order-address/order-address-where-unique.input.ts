import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class OrderAddressWhereUniqueInput {

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderDetailCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;
}

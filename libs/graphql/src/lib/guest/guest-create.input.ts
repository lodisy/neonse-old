import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GuestCreateInput {

    @Field(() => String, {nullable:false})
    identifierToken!: string;

    @Field(() => String, {nullable:true})
    email?: string;
}

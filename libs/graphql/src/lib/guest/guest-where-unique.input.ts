import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GuestWhereUniqueInput {

    @Field(() => String, {nullable:true})
    identifierToken?: string;
}

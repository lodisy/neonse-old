import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthenticationMethodWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}

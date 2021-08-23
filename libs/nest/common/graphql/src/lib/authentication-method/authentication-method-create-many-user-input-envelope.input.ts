import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodCreateManyUserInput } from './authentication-method-create-many-user.input';

@InputType()
export class AuthenticationMethodCreateManyUserInputEnvelope {

    @Field(() => [AuthenticationMethodCreateManyUserInput], {nullable:false})
    data!: Array<AuthenticationMethodCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

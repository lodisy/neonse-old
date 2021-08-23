import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodScalarWhereInput } from './authentication-method-scalar-where.input';
import { AuthenticationMethodUpdateManyMutationInput } from './authentication-method-update-many-mutation.input';

@InputType()
export class AuthenticationMethodUpdateManyWithWhereWithoutUserInput {

    @Field(() => AuthenticationMethodScalarWhereInput, {nullable:false})
    where!: AuthenticationMethodScalarWhereInput;

    @Field(() => AuthenticationMethodUpdateManyMutationInput, {nullable:false})
    data!: AuthenticationMethodUpdateManyMutationInput;
}

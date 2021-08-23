import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodUpdateManyMutationInput } from './authentication-method-update-many-mutation.input';
import { AuthenticationMethodWhereInput } from './authentication-method-where.input';

@ArgsType()
export class UpdateManyAuthenticationMethodArgs {

    @Field(() => AuthenticationMethodUpdateManyMutationInput, {nullable:false})
    data!: AuthenticationMethodUpdateManyMutationInput;

    @Field(() => AuthenticationMethodWhereInput, {nullable:true})
    where?: AuthenticationMethodWhereInput;
}

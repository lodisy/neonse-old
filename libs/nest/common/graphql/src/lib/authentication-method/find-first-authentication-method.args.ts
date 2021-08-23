import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodWhereInput } from './authentication-method-where.input';
import { AuthenticationMethodOrderByInput } from './authentication-method-order-by.input';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthenticationMethodScalarFieldEnum } from './authentication-method-scalar-field.enum';

@ArgsType()
export class FindFirstAuthenticationMethodArgs {

    @Field(() => AuthenticationMethodWhereInput, {nullable:true})
    where?: AuthenticationMethodWhereInput;

    @Field(() => [AuthenticationMethodOrderByInput], {nullable:true})
    orderBy?: Array<AuthenticationMethodOrderByInput>;

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:true})
    cursor?: AuthenticationMethodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthenticationMethodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthenticationMethodScalarFieldEnum>;
}

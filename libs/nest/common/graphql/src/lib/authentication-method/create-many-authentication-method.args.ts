import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodCreateManyInput } from './authentication-method-create-many.input';

@ArgsType()
export class CreateManyAuthenticationMethodArgs {

    @Field(() => [AuthenticationMethodCreateManyInput], {nullable:false})
    data!: Array<AuthenticationMethodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

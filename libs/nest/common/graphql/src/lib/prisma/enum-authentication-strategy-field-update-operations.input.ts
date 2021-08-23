import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationStrategy } from './authentication-strategy.enum';

@InputType()
export class EnumAuthenticationStrategyFieldUpdateOperationsInput {

    @Field(() => AuthenticationStrategy, {nullable:true})
    set?: keyof typeof AuthenticationStrategy;
}

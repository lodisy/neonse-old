import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCode } from './currency-code.enum';

@InputType()
export class EnumCurrencyCodeFieldUpdateOperationsInput {

    @Field(() => CurrencyCode, {nullable:true})
    set?: keyof typeof CurrencyCode;
}

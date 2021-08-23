import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from './language-code.enum';

@InputType()
export class EnumLanguageCodeFieldUpdateOperationsInput {

    @Field(() => LanguageCode, {nullable:true})
    set?: keyof typeof LanguageCode;
}

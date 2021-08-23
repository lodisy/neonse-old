import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from './language-code.enum';

@InputType()
export class NestedEnumLanguageCodeFilter {

    @Field(() => LanguageCode, {nullable:true})
    equals?: keyof typeof LanguageCode;

    @Field(() => [LanguageCode], {nullable:true})
    in?: Array<keyof typeof LanguageCode>;

    @Field(() => [LanguageCode], {nullable:true})
    notIn?: Array<keyof typeof LanguageCode>;

    @Field(() => NestedEnumLanguageCodeFilter, {nullable:true})
    not?: NestedEnumLanguageCodeFilter;
}

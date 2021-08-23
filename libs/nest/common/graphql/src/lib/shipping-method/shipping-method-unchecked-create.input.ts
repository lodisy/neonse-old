import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethodTranslationUncheckedCreateNestedManyWithoutShippingMethodInput } from '../shipping-method-translation/shipping-method-translation-unchecked-create-nested-many-without-shipping-method.input';

@InputType()
export class ShippingMethodUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => ShippingMethodTranslationUncheckedCreateNestedManyWithoutShippingMethodInput, {nullable:true})
    translations?: ShippingMethodTranslationUncheckedCreateNestedManyWithoutShippingMethodInput;
}

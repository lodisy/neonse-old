import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethodCreateNestedOneWithoutTranslationsInput } from '../shipping-method/shipping-method-create-nested-one-without-translations.input';

@InputType()
export class ShippingMethodTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ShippingMethodCreateNestedOneWithoutTranslationsInput, {nullable:false})
    shippingMethod!: ShippingMethodCreateNestedOneWithoutTranslationsInput;
}

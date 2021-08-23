import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethodTranslationCreateNestedManyWithoutShippingMethodInput } from '../shipping-method-translation/shipping-method-translation-create-nested-many-without-shipping-method.input';

@InputType()
export class ShippingMethodCreateInput {

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

    @Field(() => ShippingMethodTranslationCreateNestedManyWithoutShippingMethodInput, {nullable:true})
    translations?: ShippingMethodTranslationCreateNestedManyWithoutShippingMethodInput;
}

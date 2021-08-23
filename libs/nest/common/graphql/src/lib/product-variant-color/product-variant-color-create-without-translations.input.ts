import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantCreateNestedOneWithoutColorInput } from '../product-variant/product-variant-create-nested-one-without-color.input';

@InputType()
export class ProductVariantColorCreateWithoutTranslationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => ProductVariantCreateNestedOneWithoutColorInput, {nullable:true})
    productVariant?: ProductVariantCreateNestedOneWithoutColorInput;
}

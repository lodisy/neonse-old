import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantColorTranslationCreateNestedManyWithoutProductVariantColorInput } from '../product-variant-color-translation/product-variant-color-translation-create-nested-many-without-product-variant-color.input';

@InputType()
export class ProductVariantColorCreateWithoutProductVariantInput {

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

    @Field(() => ProductVariantColorTranslationCreateNestedManyWithoutProductVariantColorInput, {nullable:true})
    translations?: ProductVariantColorTranslationCreateNestedManyWithoutProductVariantColorInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantStyleTranslationCreateNestedManyWithoutProductVariantStyleInput } from '../product-variant-style-translation/product-variant-style-translation-create-nested-many-without-product-variant-style.input';
import { ProductVariantCreateNestedOneWithoutStyleInput } from '../product-variant/product-variant-create-nested-one-without-style.input';

@InputType()
export class ProductVariantStyleCreateWithoutAssetInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => ProductVariantStyleTranslationCreateNestedManyWithoutProductVariantStyleInput, {nullable:true})
    translations?: ProductVariantStyleTranslationCreateNestedManyWithoutProductVariantStyleInput;

    @Field(() => ProductVariantCreateNestedOneWithoutStyleInput, {nullable:true})
    productVariant?: ProductVariantCreateNestedOneWithoutStyleInput;
}

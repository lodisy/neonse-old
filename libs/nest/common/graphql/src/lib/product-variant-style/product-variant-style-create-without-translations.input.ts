import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { FileCreateNestedOneWithoutProductVariantStyleInput } from '../file/file-create-nested-one-without-product-variant-style.input';
import { ProductVariantCreateNestedOneWithoutStyleInput } from '../product-variant/product-variant-create-nested-one-without-style.input';

@InputType()
export class ProductVariantStyleCreateWithoutTranslationsInput {

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

    @Field(() => FileCreateNestedOneWithoutProductVariantStyleInput, {nullable:false})
    asset!: FileCreateNestedOneWithoutProductVariantStyleInput;

    @Field(() => ProductVariantCreateNestedOneWithoutStyleInput, {nullable:true})
    productVariant?: ProductVariantCreateNestedOneWithoutStyleInput;
}

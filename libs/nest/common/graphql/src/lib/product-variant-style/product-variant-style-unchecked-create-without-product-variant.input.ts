import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantStyleTranslationUncheckedCreateNestedManyWithoutProductVariantStyleInput } from '../product-variant-style-translation/product-variant-style-translation-unchecked-create-nested-many-without-product-variant-style.input';

@InputType()
export class ProductVariantStyleUncheckedCreateWithoutProductVariantInput {

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

    @Field(() => String, {nullable:false})
    fileId!: string;

    @Field(() => ProductVariantStyleTranslationUncheckedCreateNestedManyWithoutProductVariantStyleInput, {nullable:true})
    translations?: ProductVariantStyleTranslationUncheckedCreateNestedManyWithoutProductVariantStyleInput;
}

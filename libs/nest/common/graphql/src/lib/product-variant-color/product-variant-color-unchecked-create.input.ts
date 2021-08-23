import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantColorTranslationUncheckedCreateNestedManyWithoutProductVariantColorInput } from '../product-variant-color-translation/product-variant-color-translation-unchecked-create-nested-many-without-product-variant-color.input';

@InputType()
export class ProductVariantColorUncheckedCreateInput {

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

    @Field(() => String, {nullable:true})
    productVariantId?: string;

    @Field(() => ProductVariantColorTranslationUncheckedCreateNestedManyWithoutProductVariantColorInput, {nullable:true})
    translations?: ProductVariantColorTranslationUncheckedCreateNestedManyWithoutProductVariantColorInput;
}

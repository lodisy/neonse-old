import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantCreateWithoutTranslationsInput } from './product-variant-create-without-translations.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutTranslationsInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductVariantCreateWithoutTranslationsInput;
}

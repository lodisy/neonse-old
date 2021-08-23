import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUpdateWithoutTranslationsInput } from './product-category-update-without-translations.input';
import { ProductCategoryCreateWithoutTranslationsInput } from './product-category-create-without-translations.input';

@InputType()
export class ProductCategoryUpsertWithoutTranslationsInput {

    @Field(() => ProductCategoryUpdateWithoutTranslationsInput, {nullable:false})
    update!: ProductCategoryUpdateWithoutTranslationsInput;

    @Field(() => ProductCategoryCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductCategoryCreateWithoutTranslationsInput;
}

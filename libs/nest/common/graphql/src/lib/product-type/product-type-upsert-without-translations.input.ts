import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeUpdateWithoutTranslationsInput } from './product-type-update-without-translations.input';
import { ProductTypeCreateWithoutTranslationsInput } from './product-type-create-without-translations.input';

@InputType()
export class ProductTypeUpsertWithoutTranslationsInput {

    @Field(() => ProductTypeUpdateWithoutTranslationsInput, {nullable:false})
    update!: ProductTypeUpdateWithoutTranslationsInput;

    @Field(() => ProductTypeCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductTypeCreateWithoutTranslationsInput;
}

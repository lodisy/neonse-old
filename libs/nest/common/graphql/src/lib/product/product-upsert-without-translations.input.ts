import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutTranslationsInput } from './product-update-without-translations.input';
import { ProductCreateWithoutTranslationsInput } from './product-create-without-translations.input';

@InputType()
export class ProductUpsertWithoutTranslationsInput {

    @Field(() => ProductUpdateWithoutTranslationsInput, {nullable:false})
    update!: ProductUpdateWithoutTranslationsInput;

    @Field(() => ProductCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductCreateWithoutTranslationsInput;
}

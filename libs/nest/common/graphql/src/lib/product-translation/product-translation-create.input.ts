import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCreateNestedOneWithoutTranslationsInput } from '../product/product-create-nested-one-without-translations.input';

@InputType()
export class ProductTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    discription?: string;

    @Field(() => ProductCreateNestedOneWithoutTranslationsInput, {nullable:true})
    product?: ProductCreateNestedOneWithoutTranslationsInput;
}

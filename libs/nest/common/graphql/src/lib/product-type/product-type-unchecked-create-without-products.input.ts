import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductTypeTranslationUncheckedCreateNestedManyWithoutProductTypeInput } from '../product-type-translation/product-type-translation-unchecked-create-nested-many-without-product-type.input';

@InputType()
export class ProductTypeUncheckedCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => ProductTypeTranslationUncheckedCreateNestedManyWithoutProductTypeInput, {nullable:true})
    translations?: ProductTypeTranslationUncheckedCreateNestedManyWithoutProductTypeInput;
}

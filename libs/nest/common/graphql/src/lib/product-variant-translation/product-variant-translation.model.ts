import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariant } from '../product-variant/product-variant.model';

@ObjectType()
export class ProductVariantTranslation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'zh_Hans'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductVariant, {nullable:true})
    ProductVariant?: ProductVariant;

    @Field(() => String, {nullable:true})
    productVariantId!: string | null;
}

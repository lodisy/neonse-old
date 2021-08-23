import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantStyle } from '../product-variant-style/product-variant-style.model';

@ObjectType()
export class ProductVariantStyleTranslation {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantStyle, {nullable:true})
    productVariantStyle?: ProductVariantStyle;
    @Field(() => String, {nullable:true})
    productVariantStyleId!: string | null;
}

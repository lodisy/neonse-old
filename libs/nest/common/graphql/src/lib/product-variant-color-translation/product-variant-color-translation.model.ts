import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantColor } from '../product-variant-color/product-variant-color.model';

@ObjectType()
export class ProductVariantColorTranslation {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantColor, {nullable:true})
    ProductVariantColor?: ProductVariantColor;
    @Field(() => String, {nullable:true})
    productVariantColorId!: string | null;
}

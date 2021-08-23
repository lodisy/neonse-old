import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { ProductVariantStyleTranslation } from '../product-variant-style-translation/product-variant-style-translation.model';
import { ProductVariant } from '../product-variant/product-variant.model';
import { LanguageCode } from '../prisma/language-code.enum';

@ObjectType()
export class ProductVariantStyle {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => File, {nullable:false})
    asset?: File;
    @Field(() => [ProductVariantStyleTranslation], {nullable:true})
    translations?: Array<ProductVariantStyleTranslation>;
    @Field(() => ProductVariant, {nullable:true})
    productVariant?: ProductVariant;
    @Field(() => String, {nullable:true})
    productVariantId!: string | null;
    @Field(() => String, {nullable:false})
    fileId!: string;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;
}

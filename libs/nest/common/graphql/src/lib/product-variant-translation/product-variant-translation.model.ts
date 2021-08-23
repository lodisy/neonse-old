import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariant } from '../product-variant/product-variant.model';

@ObjectType()
export class ProductVariantTranslation {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => ProductVariant, {nullable:true})
    ProductVariant?: ProductVariant;
    @Field(() => String, {nullable:true})
    productVariantId!: string | null;
}

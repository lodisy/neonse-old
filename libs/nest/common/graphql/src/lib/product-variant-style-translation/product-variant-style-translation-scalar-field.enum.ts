import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantStyleTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    languageCode = "languageCode",
    name = "name",
    productVariantStyleId = "productVariantStyleId"
}

registerEnumType(ProductVariantStyleTranslationScalarFieldEnum, { name: 'ProductVariantStyleTranslationScalarFieldEnum' })

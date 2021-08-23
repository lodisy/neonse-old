import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantColorTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    languageCode = "languageCode",
    name = "name",
    productVariantColorId = "productVariantColorId"
}

registerEnumType(ProductVariantColorTranslationScalarFieldEnum, { name: 'ProductVariantColorTranslationScalarFieldEnum' })

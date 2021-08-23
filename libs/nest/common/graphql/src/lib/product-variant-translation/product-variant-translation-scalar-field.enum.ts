import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    name = "name",
    languageCode = "languageCode",
    productVariantId = "productVariantId"
}

registerEnumType(ProductVariantTranslationScalarFieldEnum, { name: 'ProductVariantTranslationScalarFieldEnum' })

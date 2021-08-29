import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantColorTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    productVariantColorId = "productVariantColorId"
}


registerEnumType(ProductVariantColorTranslationScalarFieldEnum, { name: 'ProductVariantColorTranslationScalarFieldEnum', description: undefined })

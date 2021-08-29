import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    productVariantId = "productVariantId"
}


registerEnumType(ProductVariantTranslationScalarFieldEnum, { name: 'ProductVariantTranslationScalarFieldEnum', description: undefined })

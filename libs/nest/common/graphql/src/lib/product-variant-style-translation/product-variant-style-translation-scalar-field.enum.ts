import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantStyleTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    productVariantStyleId = "productVariantStyleId"
}


registerEnumType(ProductVariantStyleTranslationScalarFieldEnum, { name: 'ProductVariantStyleTranslationScalarFieldEnum', description: undefined })

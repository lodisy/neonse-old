import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantColorScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    value = "value",
    languageCode = "languageCode",
    productVariantId = "productVariantId"
}


registerEnumType(ProductVariantColorScalarFieldEnum, { name: 'ProductVariantColorScalarFieldEnum', description: undefined })

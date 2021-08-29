import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantStyleScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    languageCode = "languageCode",
    productVariantId = "productVariantId",
    fileId = "fileId"
}


registerEnumType(ProductVariantStyleScalarFieldEnum, { name: 'ProductVariantStyleScalarFieldEnum', description: undefined })

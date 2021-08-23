import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantStyleScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    name = "name",
    productVariantId = "productVariantId",
    fileId = "fileId"
}

registerEnumType(ProductVariantStyleScalarFieldEnum, { name: 'ProductVariantStyleScalarFieldEnum' })

import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantSizeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    productVariantId = "productVariantId"
}


registerEnumType(ProductVariantSizeScalarFieldEnum, { name: 'ProductVariantSizeScalarFieldEnum', description: undefined })

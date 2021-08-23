import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantSizeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    name = "name",
    productVariantId = "productVariantId"
}

registerEnumType(ProductVariantSizeScalarFieldEnum, { name: 'ProductVariantSizeScalarFieldEnum' })

import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantColorScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    name = "name",
    value = "value",
    productVariantId = "productVariantId"
}

registerEnumType(ProductVariantColorScalarFieldEnum, { name: 'ProductVariantColorScalarFieldEnum' })

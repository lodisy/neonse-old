import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    sku = "sku",
    brands = "brands",
    price = "price",
    sale = "sale",
    stock = "stock",
    sold = "sold",
    currencyCode = "currencyCode",
    languageCode = "languageCode",
    draft = "draft",
    productId = "productId",
    customFields = "customFields"
}

registerEnumType(ProductVariantScalarFieldEnum, { name: 'ProductVariantScalarFieldEnum' })

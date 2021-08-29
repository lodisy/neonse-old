import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    sku = "sku",
    brands = "brands",
    currencyCode = "currencyCode",
    price = "price",
    sale = "sale",
    stock = "stock",
    sold = "sold",
    draft = "draft",
    productId = "productId",
    customFields = "customFields",
    languageCode = "languageCode"
}


registerEnumType(ProductVariantScalarFieldEnum, { name: 'ProductVariantScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    sku = "sku",
    discription = "discription",
    price = "price",
    featured = "featured",
    draft = "draft",
    stock = "stock",
    sold = "sold",
    languageCode = "languageCode"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })

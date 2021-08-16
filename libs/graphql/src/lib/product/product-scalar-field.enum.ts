import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    sku = "sku",
    images = "images",
    discription = "discription",
    price = "price",
    featured = "featured",
    stock = "stock",
    sold = "sold",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum' })

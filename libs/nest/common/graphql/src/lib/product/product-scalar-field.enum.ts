import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    sku = "sku",
    discription = "discription",
    price = "price",
    featured = "featured",
    draft = "draft",
    stock = "stock",
    sold = "sold",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum' })

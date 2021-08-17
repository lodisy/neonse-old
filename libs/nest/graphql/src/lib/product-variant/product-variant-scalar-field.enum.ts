import { registerEnumType } from '@nestjs/graphql'

export enum ProductVariantScalarFieldEnum {
    id = 'id',
    productId = 'productId',
    name = 'name',
    sku = 'sku',
    images = 'images',
    brands = 'brands',
    style = 'style',
    size = 'size',
    price = 'price',
    sale = 'sale',
    stock = 'stock',
    sold = 'sold',
}

registerEnumType(ProductVariantScalarFieldEnum, { name: 'ProductVariantScalarFieldEnum' })

import { registerEnumType } from '@nestjs/graphql';

export enum OrderItemScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    sku = "sku",
    brands = "brands",
    size = "size",
    color = "color",
    style = "style",
    unitPrice = "unitPrice",
    unitPriceWithTax = "unitPriceWithTax",
    discountedUnitPrice = "discountedUnitPrice",
    discountedUnitPriceWithTax = "discountedUnitPriceWithTax",
    quantity = "quantity",
    orderId = "orderId",
    fileId = "fileId"
}


registerEnumType(OrderItemScalarFieldEnum, { name: 'OrderItemScalarFieldEnum', description: undefined })

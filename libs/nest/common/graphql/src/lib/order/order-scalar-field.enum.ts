import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    placedAt = "placedAt",
    code = "code",
    pending = "pending",
    status = "status",
    totalQuantity = "totalQuantity",
    subTotal = "subTotal",
    subTotalWithTax = "subTotalWithTax",
    total = "total",
    totalWithTax = "totalWithTax",
    tracking = "tracking"
}

registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum' })

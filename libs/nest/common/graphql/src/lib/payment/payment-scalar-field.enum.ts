import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    method = "method",
    status = "status",
    transactionId = "transactionId",
    errorMessage = "errorMessage",
    metadata = "metadata",
    orderId = "orderId"
}


registerEnumType(PaymentScalarFieldEnum, { name: 'PaymentScalarFieldEnum', description: undefined })

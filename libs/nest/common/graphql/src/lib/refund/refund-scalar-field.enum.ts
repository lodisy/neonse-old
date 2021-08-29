import { registerEnumType } from '@nestjs/graphql';

export enum RefundScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    reason = "reason"
}


registerEnumType(RefundScalarFieldEnum, { name: 'RefundScalarFieldEnum', description: undefined })

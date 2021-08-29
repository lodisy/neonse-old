import { registerEnumType } from '@nestjs/graphql';

export enum PromotionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    startAt = "startAt",
    endAt = "endAt",
    couponCode = "couponCode",
    name = "name",
    enabled = "enabled",
    perCustomerUsageLimit = "perCustomerUsageLimit",
    promotionListId = "promotionListId"
}


registerEnumType(PromotionScalarFieldEnum, { name: 'PromotionScalarFieldEnum', description: undefined })

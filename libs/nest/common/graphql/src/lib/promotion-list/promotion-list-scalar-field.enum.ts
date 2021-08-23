import { registerEnumType } from '@nestjs/graphql';

export enum PromotionListScalarFieldEnum {
    id = "id",
    total = "total"
}

registerEnumType(PromotionListScalarFieldEnum, { name: 'PromotionListScalarFieldEnum' })

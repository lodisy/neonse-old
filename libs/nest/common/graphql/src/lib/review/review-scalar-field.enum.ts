import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    profileId = "profileId",
    productId = "productId",
    rate = "rate",
    description = "description"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })

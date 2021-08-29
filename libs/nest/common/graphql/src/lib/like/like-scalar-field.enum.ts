import { registerEnumType } from '@nestjs/graphql';

export enum LikeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    profileId = "profileId",
    type = "type",
    productId = "productId"
}


registerEnumType(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum', description: undefined })

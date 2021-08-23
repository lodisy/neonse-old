import { registerEnumType } from '@nestjs/graphql';

export enum LikeScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    type = "type",
    productId = "productId",
    createdAt = "createdAt"
}

registerEnumType(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum' })

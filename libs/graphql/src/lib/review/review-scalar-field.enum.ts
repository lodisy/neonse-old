import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    productId = "productId",
    rate = "rate",
    description = "description"
}

registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum' })

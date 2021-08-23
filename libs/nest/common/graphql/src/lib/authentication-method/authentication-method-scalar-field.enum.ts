import { registerEnumType } from '@nestjs/graphql';

export enum AuthenticationMethodScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    strategy = "strategy",
    userId = "userId"
}

registerEnumType(AuthenticationMethodScalarFieldEnum, { name: 'AuthenticationMethodScalarFieldEnum' })

import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    password = "password",
    lastLoginAt = "lastLoginAt",
    customFields = "customFields",
    jwtToken = "jwtToken",
    resetPasswordToken = "resetPasswordToken",
    identifierToken = "identifierToken",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' })

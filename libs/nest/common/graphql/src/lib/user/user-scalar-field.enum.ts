import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    mobile = "mobile",
    username = "username",
    password = "password",
    isEmailConfirmed = "isEmailConfirmed",
    isMobileConfirmed = "isMobileConfirmed",
    lastLoginAt = "lastLoginAt",
    customFields = "customFields",
    jwtToken = "jwtToken",
    refreshToken = "refreshToken",
    resetPasswordToken = "resetPasswordToken",
    identifierToken = "identifierToken"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

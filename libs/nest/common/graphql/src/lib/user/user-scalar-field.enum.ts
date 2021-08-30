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
    lastLogoutAt = "lastLogoutAt",
    customFields = "customFields",
    accessToken = "accessToken",
    refreshToken = "refreshToken",
    resetPasswordToken = "resetPasswordToken",
    identifierToken = "identifierToken"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

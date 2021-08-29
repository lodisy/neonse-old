import { registerEnumType } from '@nestjs/graphql';

export enum AuthenticationStrategy {
    Local = "Local",
    JWT = "JWT",
    SMS = "SMS",
    Wechat = "Wechat"
}


registerEnumType(AuthenticationStrategy, { name: 'AuthenticationStrategy', description: undefined })

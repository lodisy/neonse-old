import { registerEnumType } from '@nestjs/graphql';

export enum ChannelScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    code = "code",
    token = "token",
    defaultLanguageCode = "defaultLanguageCode",
    currencyCode = "currencyCode",
    priceIncludeTax = "priceIncludeTax",
    customFields = "customFields",
    productVariantId = "productVariantId",
    roleId = "roleId"
}

registerEnumType(ChannelScalarFieldEnum, { name: 'ChannelScalarFieldEnum' })

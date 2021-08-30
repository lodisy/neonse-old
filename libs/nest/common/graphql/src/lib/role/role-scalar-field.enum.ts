import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    name = "name",
    slug = "slug",
    description = "description",
    enabled = "enabled",
    isDefault = "isDefault",
    languageCode = "languageCode"
}


registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined })

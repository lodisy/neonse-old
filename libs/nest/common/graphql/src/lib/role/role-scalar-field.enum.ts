import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    slug = "slug",
    description = "description",
    status = "status",
    isDefault = "isDefault",
    permissions = "permissions",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum' })

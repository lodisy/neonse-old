import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    description = "description",
    status = "status",
    isDefault = "isDefault"
}

registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum' })

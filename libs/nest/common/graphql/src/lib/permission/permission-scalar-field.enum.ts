import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    action = "action",
    subject = "subject",
    fields = "fields",
    conditions = "conditions",
    inverted = "inverted",
    reason = "reason",
    roleId = "roleId"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })

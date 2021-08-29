import { registerEnumType } from '@nestjs/graphql';

export enum RoleStatus {
    normal = "normal",
    terminated = "terminated"
}


registerEnumType(RoleStatus, { name: 'RoleStatus', description: "角色状态" })

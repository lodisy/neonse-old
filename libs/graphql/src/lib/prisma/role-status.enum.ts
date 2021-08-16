import { registerEnumType } from '@nestjs/graphql';

export enum RoleStatus {
    NORMAL = "NORMAL",
    ABNORMAL = "ABNORMAL"
}

registerEnumType(RoleStatus, { name: 'RoleStatus' })
